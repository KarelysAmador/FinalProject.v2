const { Router } = require("express");
const {
  getAll,
  getModulos,
  getGrupos,
  getSemanas,
  createAlumno,
  crearUsuario,
  login,
  getUsuario,
  getEvaluacion,
  crearevaluacion,
} = require("../controllers/controllers");

const router = Router();
router.get("/usuarios", getUsuario);
router.get("/alumnos", getAll);
router.get("/modulos", getModulos);
router.get("/grupos", getGrupos);
router.get("/semanas", getSemanas);
router.get("/evaluacion", getEvaluacion);
router.post("/registro", createAlumno);
router.post("/registroUsuario", crearUsuario);
router.post("/login", login);
router.post("/evaluacion", crearevaluacion);
module.exports = router;
