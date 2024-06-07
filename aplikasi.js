var nim = [];
var nama = [];
var presensi = [];
var uas = [];
var uts= [];
var tugas= [];
var akhir= [];
var grades= [];




    var input_nim = document.getElementById("nim");
    var input_nama = document.getElementById("nama");

    var input_presensi_teori = document.getElementById('teori_presensi');
    
    var input_uas_teori = document.getElementById("teori_uas");
    var input_tugas_teori = document.getElementById("teori_tugas");
    var input_uts_teori = document.getElementById("teori_uts");

    var input_uts_praktik = document.getElementById('praktik_uts');
    var input_uas_praktik = document.getElementById("praktik_uas");
    var input_tugas_praktik = document.getElementById("praktik_tugas");
    var input_presensi_praktik = document.getElementById('praktik_presensi');
    

    var table = document.getElementById("table");
    showData();

    function showData() {
        var hapus =` <button onclick="">Hapus</button>`;
        table.innerHTML = `
        <tr id="row1">
            <th>NIM</th>
            <th>Nama</th>
            <th>presensi</th>
            <th>tugas</th>
            <th>uts</th>
            <th>uas</th>
            <th>nilai akhir</th>
            <th>grade</th>
            <th>Action</th>
        </tr>`;
        for (let i = 0; i < nim.length; i++) {
            table.innerHTML +=
                `
            <tr id="row2">
                <td>${nim[i]}</td>
                <td>${nama[i]}</td>
                <td>${presensi[i] + '%'}</td>
                <td>${tugas[i]}</td>
                <td>${uts[i]}</td>
                <td>${uas[i]}</td>
                <td>${akhir[i]}</td>
                <td>${grades[i]}</td>
                <td>
                    <button onclick="hapus(${i})" id="tombol-hapus">Hapus</button>
                    <button onclick="edit(${i})" id="tombol-edit">Edit</button>    
                </td>
            </tr> 
            `;

        }

    }

    function insertData() {

        if (input_nim.value == 0 || input_nama.value == 0 || input_presensi_teori.value == 0 || input_uas_teori.value == 0 || input_tugas_teori.value == 0 || input_uts_teori.value == 0 || input_uts_praktik.value == 0 || input_uas_praktik.value == 0 || input_tugas_praktik.value == 0 || input_presensi_praktik.value == 0 ) {

            alert("Data tidak boleh kosong");

        } else {
             
            var inputpresensi = (parseFloat(input_presensi_teori.value) + parseFloat(input_presensi_praktik.value)) / 28 * 100;
            var inputuas = (parseFloat(input_uas_teori.value) + parseFloat(input_uas_praktik.value))/2;
            var inpututs = (parseFloat(input_uts_teori.value) + parseFloat(input_uts_praktik.value))/2;
            var inputtugas = (parseFloat(input_tugas_teori.value) + parseFloat(input_tugas_praktik.value))/2;
            var nilaiakhir= (inputpresensi * 0.1) + (inpututs * 0.3) + (inputtugas * 0.3) + (inputuas * 0.3);
            nim.push(input_nim.value);
            nama.push(input_nama.value);
            presensi.push(inputpresensi);
            uas.push(inputuas);
            uts.push(inpututs);
            tugas.push(inputtugas);
            akhir.push(nilaiakhir);
           
            var grade= "A";
            if (nilaiakhir >= 80) {
                grade= "A";
            } else if (nilaiakhir >= 70) {
                grade= "B";
            } else if (nilaiakhir >= 60) {
                grade= "C";
            } else if (nilaiakhir >= 50) {
                grade= "D";
            } else {
                grade="E";
            }
            grades.push(grade);


            input_nim.value="";
            input_nama.value="";
            input_presensi_teori.value = "";
            input_presensi_praktik.value = "";
            input_uts_praktik.value = "";
            input_uts_teori.value = "";
            input_tugas_praktik.value = "";
            input_tugas_teori.value = "";
            input_uas_teori.value="";
            input_uas_praktik.value="";

            
        }



        showData();

    }

    function hapus(id) {


        var question = confirm("Yakin mau hapus data");
        if (question == true) {

            nim.splice(id, 1);
            nama.splice(id, 1);
            presensi.splice(id, 1);
            uas.splice(id, 1);
            uts.splice(id, 1);
            tugas.splice(id, 1);
            akhir.splice(id, 1);
            grades.splice(id, 1);
            

            

        }

        showData();

    }

    function edit(id) {
        var pertanyaan = prompt("Pilih (1->edit NIM)  (2.->edit Nama)");
        if (pertanyaan == 1) {
            var newData = prompt("Masukan NIM Baru", nim[id]);

            nim[id] = newData;

        } else if (pertanyaan == 2) {
            var newData = prompt("Masukan nama Baru", nama[id]);

            nama[id] = newData;


        }
  
        else{
            prompt("nilai yang anda inputkan tidak ada");
        }

        showData();
    }