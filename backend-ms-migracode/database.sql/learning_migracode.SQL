drop  table if exists curso cascade;
drop  table if exists modulo cascade;
drop  table if exists grupo cascade;
drop  table if exists alumno cascade;
drop  table if exists evaluacion cascade;
drop  table if exists usuario cascade;
drop  table if exists manager cascade;

CREATE TABLE curso (
    id             SERIAL PRIMARY KEY,
    nombre_curso     VARCHAR(30) NOT null);
    
INSERT INTO curso (nombre_curso) VALUES ('Web Development');
select * from curso;
drop table if exists modulo;
CREATE TABLE modulo (
    id              SERIAL PRIMARY KEY,
    nombre_modulo   VARCHAR(30) NOT null,
    total_semanas   INT,
    curso_id        INT REFERENCES curso(id));
    
INSERT INTO modulo (nombre_modulo, curso_id,total_semanas) VALUES ('Intro', 1,2);
INSERT INTO modulo (nombre_modulo, curso_id,total_semanas) VALUES ('Html/Ccs', 1,3);
INSERT INTO modulo (nombre_modulo, curso_id,total_semanas) VALUES ('JS1', 1,3);
INSERT INTO modulo (nombre_modulo, curso_id,total_semanas) VALUES ('JS2', 1,3);
INSERT INTO modulo (nombre_modulo, curso_id,total_semanas) VALUES ('JS3', 1,3);
INSERT INTO modulo (nombre_modulo, curso_id,total_semanas) VALUES ('React', 1,3);
INSERT INTO modulo (nombre_modulo, curso_id,total_semanas) VALUES ('Node', 1,3);
INSERT INTO modulo (nombre_modulo, curso_id,total_semanas) VALUES ('SQL', 1,3);

select * from modulo;
select nombre_curso, nombre_modulo, total_semanas  from modulo m join curso c on m.curso_id  = c.id ;
drop table if exists grupo;

CREATE TABLE grupo (
   codigo_grupo     VARCHAR(40) PRIMARY KEY,
   curso_id        INT REFERENCES curso(id),
   estado_grupo          BOOLEAN not null);
   
INSERT INTO grupo (codigo_grupo, curso_id,  estado_grupo) VALUES ('JUL2022SP',1,'1');
INSERT INTO grupo (codigo_grupo, curso_id,  estado_grupo) VALUES ('JUL2022EN',1,'1');

select * from grupo;
select nombre_curso, codigo_grupo,  estado_grupo  from grupo g join curso c on g.curso_id = c.id  where estado_grupo = TRUE ;





CREATE TABLE usuario (
   id                SERIAL PRIMARY key,
   email             VARCHAR(120) NOT null unique,
   password          VARCHAR(120) NOT null,
   tipo_usuario      VARCHAR (1) NOT null);
   
  
  insert INTO usuario(email,password,tipo_usuario)
   VALUES ('luistramos@gmail.com','$2b$10$r3wgyvx8uyyVljnB..A6tuq8PqKLDc9ZjTXvbAl9yD7TtEYxOr2Ay', 'A');
   insert INTO usuario(email,password,tipo_usuario)
   VALUES ('andrea_acosta@gmail.com','$2b$10$r3wgyvx8uyyVljnB..A6tuq8PqKLDc9ZjTXvbAl9yD7TtEYxOr2Ay','M');
  insert INTO usuario(email,password,tipo_usuario)
   VALUES ('nata_rosa@gmail.com','$2b$10$r3wgyvx8uyyVljnB..A6tuq8PqKLDc9ZjTXvbAl9yD7TtEYxOr2Ay', 'A');
     insert INTO usuario(email,password,tipo_usuario)
   VALUES ('ramon@gmail.com','$2b$10$r3wgyvx8uyyVljnB..A6tuq8PqKLDc9ZjTXvbAl9yD7TtEYxOr2Ay', 'A');
  
  
  select *from usuario u; 
  SELECT * FROM usuario WHERE email = 'luistramos@gmail.com';
  

create table alumno (
    id              SERIAL PRIMARY KEY,
    nombre_completo  VARCHAR(40) NOT null,
    nro_identif      VARCHAR(15),
    dir_github       VARCHAR(30),
    telefono         VARCHAR(15),
    nacionalidad     VARCHAR(20),
    fecha_nac        DATE,
    codigo_grupo     VARCHAR(40) REFERENCES grupo(codigo_grupo),
    estado_alumno    Boolean,
    usuario_id       INT references usuario(id));
  
   
INSERT INTO alumno (nombre_completo,nro_identif,dir_github,telefono,nacionalidad,fecha_nac,codigo_grupo, estado_alumno , usuario_id) 
   VALUES ('LUIS RAMOS','Y-7867254-A','https://github.com/luistramos',671246544,'VENEZOLANA','1978-12-13','JUL2022SP','1',2);
INSERT INTO alumno (nombre_completo,nro_identif,dir_github,telefono,nacionalidad,fecha_nac,codigo_grupo, estado_alumno , usuario_id) 
   VALUES ('Andrea Acosta','Y-7788664-C','https://github.com/@indarit',651300967,'VENEZOLANA','1980-10-27','JUL2022SP','1',1);

  INSERT INTO alumno (nombre_completo,nro_identif,dir_github,telefono,nacionalidad,fecha_nac,codigo_grupo, estado_alumno , usuario_id) 
   VALUES ('Natalia Rosa','Y-7788665-H','https://github.com/@nrosa',574878101,'Argentina','1986-06-06','JUL2022EN','1',3);
  
    INSERT INTO alumno (nombre_completo,nro_identif,dir_github,telefono,nacionalidad,fecha_nac,codigo_grupo, estado_alumno , usuario_id) 
   VALUES ('Ramon Saniba','Y-7887665-J','https://github.com/@rsaniba',615067824,'Espanol','1989-06-06','JUL2022EN','1',4);
  select * from alumno;





create table manager(
    id SERIAL primary key, 
    nombre_completo varchar (40),
   usuario_id INT references usuario(id));
   
	insert into manager (nombre_completo, id)
	values ('Alí Raza', 1);


drop table if exists evaluacion;
CREATE TABLE evaluacion (
    alumno_id       INT REFERENCES alumno(id),
    modulo_id       INT references modulo(id),
    semana          INT,
    status_tarea    VARCHAR(2),
    status_asist1   VARCHAR(2),
    status_asist2   VARCHAR(2),  
    PRIMARY KEY(alumno_id, modulo_id,semana));

   select * from usuario;
  
  
   
INSERT INTO evaluacion (alumno_id, modulo_id, semana , status_tarea, status_asist1, status_asist2) VALUES (1,1,1,'Y','Y','UM');
INSERT INTO evaluacion (alumno_id, modulo_id, semana , status_tarea, status_asist1, status_asist2) VALUES (1,1,2,'Y','D','M');
INSERT INTO evaluacion (alumno_id, modulo_id, semana , status_tarea, status_asist1, status_asist2) VALUES (1,2,1,'Y','UD','UD');
INSERT INTO evaluacion (alumno_id, modulo_id, semana , status_tarea, status_asist1, status_asist2) VALUES (1,2,2,'U','M','D');
INSERT INTO evaluacion (alumno_id, modulo_id, semana , status_tarea, status_asist1, status_asist2) VALUES (1,2,3,'N','UM','Y');
INSERT INTO evaluacion (alumno_id, modulo_id, semana , status_tarea, status_asist1, status_asist2) VALUES (2,1,1,'Y','Y','UM');
INSERT INTO evaluacion (alumno_id, modulo_id, semana , status_tarea, status_asist1, status_asist2) VALUES (2,1,2,'Y','D','M');
INSERT INTO evaluacion (alumno_id, modulo_id, semana , status_tarea, status_asist1, status_asist2) VALUES (2,2,1,'Y','UD','UD');
INSERT INTO evaluacion (alumno_id, modulo_id, semana , status_tarea, status_asist1, status_asist2) VALUES (2,2,2,'U','M','D');
INSERT INTO evaluacion (alumno_id, modulo_id, semana , status_tarea, status_asist1, status_asist2) VALUES (2,2,3,'N','UM','Y');

INSERT INTO evaluacion (alumno_id, modulo_id, semana , status_tarea, status_asist1, status_asist2) VALUES (3,1,1,'Y','Y','UM');
INSERT INTO evaluacion (alumno_id, modulo_id, semana , status_tarea, status_asist1, status_asist2) VALUES (3,1,2,'Y','D','M');
INSERT INTO evaluacion (alumno_id, modulo_id, semana , status_tarea, status_asist1, status_asist2) VALUES (3,2,1,'Y','UD','UD');
INSERT INTO evaluacion (alumno_id, modulo_id, semana , status_tarea, status_asist1, status_asist2) VALUES (3,2,2,'U','M','D');
INSERT INTO evaluacion (alumno_id, modulo_id, semana , status_tarea, status_asist1, status_asist2) VALUES (3,2,3,'N','UM','Y');
INSERT INTO evaluacion (alumno_id, modulo_id, semana , status_tarea, status_asist1, status_asist2) VALUES (4,1,1,'Y','Y','UM');
INSERT INTO evaluacion (alumno_id, modulo_id, semana , status_tarea, status_asist1, status_asist2) VALUES (4,1,2,'Y','D','M');
INSERT INTO evaluacion (alumno_id, modulo_id, semana , status_tarea, status_asist1, status_asist2) VALUES (4,2,1,'Y','UD','UD');
INSERT INTO evaluacion (alumno_id, modulo_id, semana , status_tarea, status_asist1, status_asist2) VALUES (4,2,2,'U','M','D');
INSERT INTO evaluacion (alumno_id, modulo_id, semana , status_tarea, status_asist1, status_asist2) VALUES (4,2,3,'N','UM','Y');






select * from evaluacion e ;

select nombre_completo, nombre_curso, nombre_modulo, semana, status_asist1 , status_asist2 , status_tarea  from evaluacion e  
	join alumno a on e.alumno_id = a.id
	join modulo m on e.modulo_id = m.id
	join curso c on m.curso_id = c.id 
	where a.codigo_grupo = 'JUL2022SP' and m.id = 1 and e.semana = 1 order by  modulo_id, semana;

select nombre_completo, nombre_curso, nombre_modulo, semana, status_asist1 , status_asist2 , status_tarea  from evaluacion e  
	join alumno a on e.alumno_id = a.id
	join modulo m on e.modulo_id = m.id
	join curso c on m.curso_id = c.id 
	where a.codigo_grupo = 'JUL2022EN' and m.id = 2 order by  modulo_id, semana;
	
update evaluacion set status_asist1 = 'N', status_asist2 = 'Y', status_tarea = 'N' where alumno_id = 1 and modulo_id = 1 and semana = 1;
update evaluacion set status_asist2 = 'Y' where alumno_id = 2 and modulo_id = 1 and semana = 1;
update evaluacion set status_asist1 = '', status_asist2 = '', status_tarea = '' where alumno_id = 2 and modulo_id = 1 and semana = 1;