'use scrict';
 var response = require('./rest');
 var connection = require('./koneksi');

 exports.index = function (req,res) {
     response.ok("Aplikasi REST API berjalan!",res);
 }

// Menampilkan semua data mahasiswa
exports.tampilSemuaDataMahasiswa = function (req,res) {
    connection.query('SELECT * FROM mahasiswa',function(error, rows, fields){
        if(error){
            connection.log(error)
        } else {
            response.ok(rows,res)
        }
    })
}

// Menampilkan data berdasarkan id
exports.tampilBerdasarkanID = function(req,res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id],
        function (error,rows,fields) {
            if(error){
                console.log(error);
            } else{
                response.ok(rows,res);
            }
        }
    );
}