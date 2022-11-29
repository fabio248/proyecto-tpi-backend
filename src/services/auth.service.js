import boom from '@hapi/boom';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import config from '../config/config.js';
import UserService from './users.service.js';

const service = new UserService();

class AuthService {
  async getUser(email, password) {
    const user = await service.findByEmail(email);
    if (!user) throw boom.unauthorized();
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw boom.unauthorized();
    delete user.dataValues.password;
    return user;
  }

  signToken(user) {
    const payload = {
      sub: user.id,
      role: user.role,
    };
    const token = jwt.sign(payload, config.secretJwt);
    return { user, token };
  }

  async sendRecoveryPassword(email) {
    const user = await service.findByEmail(email);
    if (!user) throw boom.unauthorized();

    const payload = { sub: user.id };
    const token = jwt.sign(payload, config.secretJwt, { expiresIn: '15min' });
    const link = `${config.urlFronted}/cambiar-contraseña?token=${token}`;
    await service.update(user.id, { recoveryToken: token });
    const mail = {
      from: `${config.smtpEmail}`, // sender address
      to: `${user.email}`, // list of receivers
      subject: 'Email para cambio de contraseña', // Subject line
      html: `<p>Hola,</p>
            <p>Este correo es para cambiar tu contraseña.</p>
            <b>Ingresa a este link para cambiar la contraseña => ${link} </b>
            <p>Este link expira en 15 minutos</p>
            <p>El equipo de Sastreria Momia Loca.</p>`, // html body
    };
    const rta = await this.sendMail(mail);
    return rta;
  }
  async sendMail(infoEmail) {
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: config.smtpEmail,
        pass: config.smtpPassword,
      },
    });
    await transporter.sendMail(infoEmail);

    return { message: 'mail sent' };
  }

  async changePassword(token, newPassword) {
    try {
      const payload = jwt.verify(token, config.jwtSecret);
      const user = await service.findOne(payload.sub);
      if (user.recoveryToken !== token) {
        throw boom.unauthorized();
      }
      const hash = bcrypt.hash(newPassword, 10);
      await service.update(user.id, { password: hash, recoveryToken: null });
      return { message: 'Password changed' };
    } catch (error) {
      throw boom.unauthorized();
    }
  }
}

export default AuthService;
