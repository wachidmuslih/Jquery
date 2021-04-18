/*
* AJAX
* AJAX = Asynchronous JavaScript and XML.
* AJAX atau Asynchronous JavaScript and XML adalah teknik

* yang digunakan untuk membuat website yang dinamis.
* Artinya website mampu mengupdate dan menampilkan

* data baru dari server tampa perlo melakukan reload.
* Pada praktikum ini, kita akan menggunakan AJAX Jquery*/

// Fungsi AJAX Jquery untuk meload isi file
$(function () {
    $("#nama").load("tets.txt");
});

/* Berikut merupakan Jungsi untuk fetch data dari internet menggunakan AJAX Jquery

* Kita menggunakan https: //jsonplaceholder. typicode. com/photos sebagai urinya,
* silakan dibuka dulu agar paham

*/
$(function () {
    let url = "https://jsonplaceholder.typicode.com/photos";
    // Mengambit button untuk fetch data
    // Boleh Hilangkan line 26 dan 46 jika ingin data Langsung terload saat membuka
    // browser

    $("#getPost").on("click", function () {
        //memanggil Jquery ajax
        $.ajax({
            //memanggil variabel url
            url: url,

            //menggunakan Get request
            type: 'GET',

            //jika sukses
            success: function (data) {
                let data_html = '';
                //looping data (ambil satu persatu data)
                $.each(data, function (i, item) {

                    //mengkonversi hasil loop tadi ke HTML
                    data_html +=
                        '<br>' +
                        '<img src="' + item.thumbnailUrl + '"alt="">' +
                        '<br>' +
                        '<h1>' + item.id + '. ' + item.title + '</h1>'

                });

                // Memasukkan hasil loop tadi ke div dengan id #data_hasil_dari_internet
                $("#data_hasil_dari_internet").html(data_html);

            },

            // Jika Error
            error: function (error) {
                // Tampilkan Console. Log
                console.Log(error);
            }
        })
    });
});
