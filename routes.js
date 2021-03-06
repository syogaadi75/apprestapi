'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilSemuaDataMahasiswa)
    
    app.route('/tampil/:id')
        .get(jsonku.tampilBerdasarkanID)

    app.route('/tambah')
        .post(jsonku.tambahDataMahasiswa)

    app.route('/ubah')
        .put(jsonku.ubahMahasiswa)

    app.route('/hapus')
        .delete(jsonku.hapusMahasiswa)
}