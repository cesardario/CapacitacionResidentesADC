
const jwt = require("jwt-simple");
const servi = require('../token/token')
const confing = require('../config/config')
const moment = require('moment');
function estasAutentificado(req, res, next) {

    if (!req.headers.authorization) {
        return res.status(403).send({ message: `No tienes autorizacion` })
    }

    const token1 = req.headers.authorization.replace(/['"]+/g, '')
    // const token1 = req.headers.authorization
    console.log(token1)
    const promesa = new Promise((resolv, reject) => {



        var decodificada = jwt.decode(token1, confing.secret, function (err, token) {

            reject(err)

            console.log(token)

        })

        resolv(decodificada)

    });

    promesa
        .then(decodificada => {

            if (decodificada.exp <= moment().unix()) {
                return res.status(403).send({ message: `Toquen Expirado`, status: 403 })

            }
            else {
               

            }
            
        })

         .then(decodificada => {
            console.log('lol')
            next()
          })




        .catch(() => {
            return res.status(403).send({ message: `Toquen invalido`, status: 403 })

        })


}
module.exports = estasAutentificado