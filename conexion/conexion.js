var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'prueba'
});

function conectarsePool(){
    pool.getConnection(function(err, connection) {
        if(err){
            throw err;
        }
        else{
           console.log('conexion Exitosa')
        }
        });
        return pool
     }
     
module.exports={
    conectarsePool
}