const pool = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const { request } = require("express");

// SQL
const get_Usuario = "SELECT * FROM usuario";
const get_Alumnos = "SELECT * FROM alumno";
const get_Modulos = "select * from modulo";
const get_Grupos = "select * from grupo";
const get_semanas = "select  nombre_modulo, total_semanas from modulo m";
const inserAlumno =
  "INSERT INTO alumno (nombre_alumno, apellido_alumno, nro_identif, dir_email, dir_github, telefono, nacionalidad, fecha_nac, grupo_id, estado, password ) VALUES ($1 ,$2 ,$3 , $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *";
const insertusuario =
  "INSERT INTO usuario (email,password,tipo_usuario) VALUES ($1 ,$2 ,$3)RETURNING *";
const get_evaluacion = "select  nombre_completo, status_asist1, status_asist2, status_tarea \
from grupo g \
join modulo m on m.curso_id = g.curso_id \
join evaluacion e on e.modulo_id = m.id \
join alumno a ON a.id = e.alumno_id and a.codigo_grupo = g.codigo_grupo \
where g.codigo_grupo = $1 and m.id =$2 and e.semana = $3";
const insert_evaluacion =
  "INSERT INTO evaluacion (alumno_id, modulo_id, semana , status_tarea, status_asist1, status_asist2) VALUES ($1 ,$2 ,$3, $4 ,$5 , $6)RETURNING *";

const getUsuario = async (req, res) => {
  try {
    await pool.query(get_Usuario, (error, result) => {
      res.json(result.rows);
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    await pool.query(get_Alumnos, (error, result) => {
      res.json(result.rows);
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const getModulos = async (req, res) => {
  try {
    await pool.query(get_Modulos, (error, result) => {
      res.json(result.rows);
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const getGrupos = async (req, res) => {
  try {
    await pool.query(get_Grupos, (error, result) => {
      res.json(result.rows);
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const getSemanas = async (req, res) => {
  try {
    await pool.query(get_semanas, (error, result) => {
      res.json(result.rows);
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

async function createAlumno(req, res) {
  const {
    nombre,
    apellido,
    identificacion,
    email,
    github,
    telefono,
    nacionalidad,
    fechanac,
    grupo,
    estado,
    password,
  } = req.body;
  console.log(req.body);
  try {
    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    let newUser = await pool.query(inserAlumno, [
      nombre,
      apellido,
      identificacion,
      email,
      github,
      telefono,
      nacionalidad,
      fechanac,
      grupo,
      estado,
      bcryptPassword,
    ]);

    const jwtToken = jwtGenerator(newUser.rows[0].id);
    return res.json({ jwtToken });
  } catch (error) {
    console.error(error.message);
    res.status(400).json(`this  already exist!`);
  }
}
async function crearUsuario(req, res) {
  const { email, password, tipo_usuario } = req.body;
  console.log(req.body);
  try {
    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    let newUser = await pool.query(insertusuario, [
      email,
      bcryptPassword,
      tipo_usuario,
    ]);

    //const jwtToken = jwtGenerator(newUser.rows[0].id);
    return res.status(201).json("ok");
  } catch (error) {
    console.error(error.message);
    res.status(400).json(`this  already exist!`);
  }
}
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await pool.query("SELECT * FROM usuario WHERE email = $1", [
      email,
    ]);

    if (user.rows.length === 0) {
      return res
        .status(401)
        .json({ error: "Invalid Credential", isAuthenticated: false });
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].password);

    if (!validPassword) {
      return res
        .status(401)
        .json({ error: "Invalid Credential", isAuthenticated: false });
    }
    const jwtToken = jwtGenerator(user.rows[0].id);

    return res.status(200).json({ jwtToken, isAuthenticated: true });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

const getEvaluacion = async (req, res) => {
  try {
    let codigoGrupo= req.query.grupo
    let moduloId= req.query.moduloId
    let semana= req.query.semana

    await pool.query(get_evaluacion, [codigoGrupo, moduloId, semana],(error, result) => {
      console.log(codigoGrupo);
      res.json(result.rows);
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};
async function crearevaluacion(req, res) {
  const {
    alumno_id,
    modulo_id,
    semana,
    status_tarea,
    status_asist1,
    status_asist2,
  } = req.body;
  console.log(req.body);
  try {
    let nuevaevaluacion = await pool.query(insert_evaluacion, [
      alumno_id,
      modulo_id,
      semana,
      status_tarea,
      status_asist1,
      status_asist2,
    ]);
    return res.status(201).json("ok");
  } catch (error) {
    console.error(error.message);
    res.status(400).json(`this  already exist!`);
  }
}

module.exports = {
  getAll,
  createAlumno,
  crearUsuario,
  getModulos,
  getGrupos,
  getSemanas,
  login,
  getUsuario,
  getEvaluacion,
  crearevaluacion,
};
