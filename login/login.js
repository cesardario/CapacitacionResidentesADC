
'use strict'


var servi = require('../token/token');
var conexion = require("../conexion/conexion");

var SqlString = require('sqlstring');
var user =require('../userDao/user')
function busquedalogin(req, res) {
    
    console.log(req.body.usuario)
    console.log(req.body.contrase)
    var sql = `SELECT * FROM user WHERE usuario =${SqlString.escape(req.body.usuario)} AND contra =${SqlString.escape(req.body.contrase)}`
    var cn = conexion.conectarsePool()

    // var result = user.consulta(sql)
    cn.query(sql, function (error, result, campos) {
        if(error)
        throw error
        if (result.length>0) {
            res.status(200).send({ menssage: `Logeado`, tok: servi.creacionToken(result), estatus: 200 })
    
        }
        else {
            res.status(401).send({ menssage: `Credencialees Invalidas `, estatus: 401 })
        }      });
   
   cn.release
}

module.exports = {

    busquedalogin
}