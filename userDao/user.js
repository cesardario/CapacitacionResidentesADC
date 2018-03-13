
var conexion = require("../conexion/conexion");

function consulta(sql) {
    var cn = conexion.conectarsePool()


    var guardar
    cn.query(sql, function (error, result, campos) {
        if (error)
            throw error
        guardar = result
        
    });


    return guardar
    cn.release


}
function saveUser(req, res) {
    console.log(req.body);

    var cn = conexion.conectarsePool()
    var sql = "INSERT INTO user set ?";
    cn.query(sql, req.body, (err, result) => {
        if (err) {
            throw err
        } else {
            res.status(300).send({ menssage: `Dato Guardado`, status: 300 })
        }
    });
    cn.release;
}
module.exports = { consulta, saveUser } 