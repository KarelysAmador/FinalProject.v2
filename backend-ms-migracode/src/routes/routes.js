const { Router } = require("express");
const {
  getalumnosAll,
  getAlumnosId,
  getModulos,
  getGrupos,
  getSemanas,
  createAlumno,
  crearUsuario,
  login,
  getUsuario,
  getEvaluacion,
  getEvaluacionIndividual,
  crearevaluacion,
} = require("../controllers/controllers");

const router = Router();
router.get("/usuarios", getUsuario);
router.get("/alumnos", getalumnosAll);
router.get("/alumnos/:id", getAlumnosId);
router.get("/modulos", getModulos);
router.get("/grupos", getGrupos);
router.get("/semanas", getSemanas);
router.get("/evaluacion", getEvaluacion);
//router.get("/evaluacion/:id", getEvaluacionIndividual);
router.post("/registro", createAlumno);
router.post("/registroUsuario", crearUsuario);
router.post("/login", login);
router.post("/evaluacion", crearevaluacion);
module.exports = router;
