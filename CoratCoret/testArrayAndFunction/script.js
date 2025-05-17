let penumpang = [];
let i = 0;

let tambahPenumpang = function (namaPenumpang, penumpang) {

    /* Ketika angkot masih kosong */
    if( penumpang.length == 0 ) {
        penumpang.push(namaPenumpang);
        return penumpang;
    }

    /* ketika ada penumpang */
    else {

        while( i < penumpang.length ) {

            /* ketika ada penumpang yang turun */
            if( penumpang[i] == undefined ) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            }

            /* ketika penumpang dengan nama yang sama */
            else if( penumpang[i] == namaPenumpang ) {
                console.log( namaPenumpang + " sudah ada didalam angkot!!");
                return penumpang;
            }

            /* ketika masih ada kursi kosong */
            else if( i == penumpang.length - 1 ) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
            i++
        }

    }

};

let hapusPenumpang = function (namaPenumpang, penumpang) {

    /* ketika angkot kosong */
    if( penumpang.length == 0 ) {
        console.log("Angkot masih kosong!!");
        return penumpang;
    }

    /* ketika ada penumpang */
    else {

            /* meghapus penumpang */
            if( penumpang[i] == namaPenumpang ) {
                penumpang[i] = undefined;
                return penumpang;
            }

            /* nama penumpang tidak sesuai */
            else if( namaPenumpang != penumpang[i] ) {
                console.log(namaPenumpang + " tidak ada didalam angkot!!");
                return penumpang;
            }
            i++
    }

};


















