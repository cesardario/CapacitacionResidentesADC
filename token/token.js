const jwt = require("jwt-simple");
const moment = require('moment');
const confing = require('../config/config')
function creacionToken(user) {

    console.log(user)

    const payload = {
        sub: user[0].id,
        iat: moment().unix(),
        exp: moment().add(120, 'second').unix()



    }
    console.log(payload)
    return jwt.encode(payload, confing.secret)

}


module.exports = {
    creacionToken
}
   