function cetakNama(nama){
    return `Halo, nama saya ${nama}`
}

const Pi = 3.14

const mahasiswa = {
    nama : 'Abi', 
    umur : 24,
    cetakMhs(){
        return `Halo, nama saya ${this.nama} dan saya ${this.umur} tahun`
    }
}

class Orang{
    constructor(){
        console.log('Objek orang dibuat');
    }
}
 

module.exports = { cetakNama, Pi, mahasiswa, Orang}