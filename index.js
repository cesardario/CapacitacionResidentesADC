var express = require('express');

var parser = require('body-parser')
var logiin = require('./login/login')
const app = express()

app.use(parser.urlencoded({extends: false}));
app.use(parser.json());

const conexion = require('./conexion/conexion');
const auth =require('./atentificacion/authen')
const user = require('./userDao/user')

app.post('/login',logiin.busquedalogin)


app.get('/privado',auth,user.saveUser,(req,res)=> {
     res.status(300).send({ menssage :`Tienes acesso`})
     
   })

const port = process.env.PORT || 3080

app.listen(port, () => {
    console.log( `Se esta ejecutando:${port}`)
});