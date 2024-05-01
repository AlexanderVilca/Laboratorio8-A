const express = require('express');
const Sequelize = require('sequelize');
const { Json } = require('sequelize/lib/utils');
const app = express();

//definimos los parametros de conexion

const sequelize = new Sequelize('farmacia','root','',{
    host:'localhost',
    dialect:'mysql'
})

//definimos el modelo

const laboratoriosModel = sequelize.define('laboratorios',{
    "CodLab":{type:Sequelize.INTEGER, primaryKey:true},
    "razonSocial":Sequelize.STRING,
    "direccion":Sequelize.STRING,
    "telefono":Sequelize.STRING
});

//autenticamos
sequelize.authenticate()
.then(()=>{
    console.log('conexion a la base de datos Ok');
})

.catch(error => {
    console.log('error de conexion a la base de datos' + error)
})

//Mostramos todos los registros

laboratoriosModel.findAll({attributes: ['CodLab', 'razonSocial', 'direccion', 'telefono']})
.then(laboratorios=>{
    const resultados = JSON.stringify(laboratorios)
    console.log(resultados)
})

.catch(error => {
    console.log('No hay registros' + error)
})

app.listen(3000, ()=>{
    console.log('conectado')
})