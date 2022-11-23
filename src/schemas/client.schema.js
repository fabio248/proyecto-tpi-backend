import Joi from 'joi';

const id = Joi.string().uuid();
const firstName = Joi.string().min(3);
const secondName = Joi.string().min(3);
const firstLastName = Joi.string().min(3);
const secondLastName = Joi.string().min(3);
const thirdLastName = Joi.string().min(3);
const email = Joi.string().email();
const gender = Joi.string();
const phone = Joi.string();
//Elementos medidaParteInferiorHombre
const largoPantalon = Joi.string();
const cadera = Joi.string();
const anchoRodilla = Joi.string();
const anchoTobillo = Joi.string();
const cinturaARodilla = Joi.string();
const tiro = Joi.string();
//Elementos medidaParteSuperiorHombre
const hombro = Joi.string();
const largoCamisa = Joi.string();
const anchoCuello = Joi.string();
const talleFrente = Joi.string();
const frentePecho = Joi.string();
const talleEspalda = Joi.string();
const bocaManga = Joi.string();
const sisaCamisa = Joi.string();
const primerBoton = Joi.string();
const largoManga = Joi.string();
const hombreACodo = Joi.string();
const anchoBrazo = Joi.string();
const cintura = Joi.string();
const espalda = Joi.string();
//Elementos medidaParteSuperiorMujer
const escote = Joi.string();
const talle = Joi.string();
const busto = Joi.string();
const manga = Joi.string();
const costado = Joi.string();
const createClientSchema = Joi.object({
  firstName: firstName.required(),
  firstLastName: firstLastName.required(),
  phone: phone.required(),
  gender: gender.required(),
  secondName,
  secondLastName,
  thirdLastName,
  email,
  medidaParteSuperiorHombre: Joi.object({
    id: id.required(),
    hombro,
    largoCamisa,
    anchoCuello,
    talleFrente,
    frentePecho,
    talleEspalda,
    bocaManga,
    sisaCamisa,
    primerBoton,
    largoManga,
    hombreACodo,
    anchoBrazo,
    cintura,
    cadera,
    espalda,
  }),
  medidaParteInferiorHombre: Joi.object({
    id: id.required(),
    largoPantalon,
    anchoRodilla,
    anchoTobillo,
    cinturaARodilla,
    tiro,
    cadera,
  }),
  medidasParteSuperiorMujer: Joi.object({
    id: id.required(),
    largoBlusa: largoCamisa,
    escote,
    hombro,
    talle,
    busto,
    sisa: sisaCamisa,
    manga,
    costado,
    espalda,
    primerBoton,
    cintura,
    cadera,
  }),
  medidasParteInferiorMujer: Joi.object({
    id: id.required(),
    largoPantalon,
    tiro,
    cadera,
    anchoRodilla,
    anchoTobillo,
    cinturaARodilla,
  }),
});

const updateClientSchema = Joi.object({
  firstName,
  secondName,
  firstLastName,
  secondLastName,
  thirdLastName,
  email,
  phone,
});

const getClientSchema = Joi.object({
  id: id.required(),
});

export { createClientSchema, updateClientSchema, getClientSchema };
