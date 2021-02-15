var kasir = (function() {
    var idPegawai = '-'

    this.setPegawai = function(newPegawai) {
        idPegawai = newPegawai
    }

    this.getPegawai = function() {
        return idPegawai
    }

    this.hitungBiaya = function(jamKeluar, jamMasuk) {
        var newJamMasuk = parseInt(jamMasuk.substring(3,5))
        var newJamKeluar = parseInt(jamKeluar.substring(3,5))

        var biaya = (newJamKeluar-newJamMasuk) * 2000
        console.log("\n=== Biaya Parkir ===")
        console.log("Biaya Parkir Anda = " + biaya )
        var bayar = parseInt(prompt('Bayar = '))
        console.log("Kembalian         = " + (bayar - biaya))
    }

    return {
        setPegawai: this.setPegawai,
        getPegawai: this.getPegawai,
        hitungBiaya: this.hitungBiaya
    }
}())

function Karcis() {
    var idKarcis, jamMasuk, jamKeluar

    function insertIdKarcis(newIdKarcis) {
        idKarcis = newIdKarcis
    }

    function insertJamKeluar(newJamKeluar) {
        jamKeluar = newJamKeluar
    }

    function insertJamMasuk(newJamMasuk) {
        jamMasuk = newJamMasuk
    }

    return {
        insertIdKarcis: insertIdKarcis,
        insertJamMasuk: insertJamMasuk,
        insertJamKeluar: insertJamKeluar,
        setPegawai: kasir.setPegawai(prompt('Masukkan ID Pegawai : ')),
        getPegawai: kasir.getPegawai(),
        idKarcis: function() {
            return idKarcis
        },
        jamKeluar: '-',
        jamMasuk: function() {
            return jamMasuk
        }
    }
}

const prompt = require('prompt-sync')()

var karcis = {}
var arrayKarcis = []
var chc = 1

while(chc!=4) {
    console.log('\n=== MENU ===')
    console.log('1. Data Kendaraan')
    console.log('2. Kendaraan Masuk')
    console.log('3. Kendaraan Keluar')
    console.log('4. Keluar')

    chc = prompt('Masukkan pilihan : ')

    switch(parseInt(chc)) {
        case 1:
            console.log('\n=== Data Kendaraan ===')
            for (const x in arrayKarcis) {
                console.log(`ID Karcis : ${arrayKarcis[x].idKarcis()}`)
                console.log(`Jam Masuk : ${arrayKarcis[x].jamMasuk()}`)
                console.log(`Jam Keluar : ${arrayKarcis[x].jamKeluar}`)
                console.log(`ID Pegawai : ${arrayKarcis[x].getPegawai}`)
                console.log('----------------------------')
            }
            break
        case 2:
            console.log('\n=== Kendaraan Masuk ===')

            karcis = new Karcis()
            karcis.insertIdKarcis(prompt('Masukkan ID Karcis : '))
            karcis.insertJamMasuk(prompt('Masukkan jam (hh:mm) : '))

            arrayKarcis.push(karcis)
            break
        case 3:
            console.log('\n=== Kendaraan Keluar ===')
            var idKarcis = prompt('ID Karcis : ')

            for (const x in arrayKarcis) {
                if (arrayKarcis[x].idKarcis() == idKarcis) {
                    arrayKarcis[x].jamKeluar = prompt('Masukkan jam (hh:mm) : ')
                    kasir.hitungBiaya(arrayKarcis[x].jamKeluar,arrayKarcis[x].jamMasuk())
                }
            }

            break
        case 4:
            console.log('Thank You!')
            break
        default:
            console.log('Ops, try again!')
    }
}