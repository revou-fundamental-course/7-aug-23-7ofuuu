// ? Hasil
var hasilAkhirKeliling = document.getElementById("hasil-akhir-keliling");
var hasilAkhirLuas = document.getElementById("hasil-akhir-luas");

// ? Get input
const inputKeliling = document.getElementsByClassName("input-keliling");
const inputLuas = document.getElementsByClassName("input-luas");

function hitungKeliling() {
  const sisi1 = document.getElementById("sisi1").value;
  const sisi2 = document.getElementById("sisi2").value;
  const sisi3 = document.getElementById("sisi3").value;

  var keliling = parseInt(sisi1) + parseInt(sisi2) + parseInt(sisi3);

  document.getElementById("sisi1Value").innerHTML = sisi1;
  document.getElementById("sisi2Value").innerHTML = sisi2;
  document.getElementById("sisi3Value").innerHTML = sisi3;
  document.getElementById("kelilingHasil").innerHTML = keliling;

  hasilAkhirKeliling.style.display = "block";

  if (sisi1 == "" || sisi2 == "" || sisi3 == "") {
    alert("Masukan Angka!");
    hasilAkhirKeliling.style.display = "none";
  }
}

function hitungLuas() {
  const alas = document.getElementById("alas").value;
  const tinggi = document.getElementById("tinggi").value;

  var luas = (parseInt(alas) * parseInt(tinggi)) / 2;

  document.getElementById("alasValue").innerHTML = alas;
  document.getElementById("tinggiValue").innerHTML = tinggi;
  document.getElementById("luasHasil").innerHTML = luas;

  hasilAkhirLuas.style.display = "block";

  if (alas == "" || tinggi == "") {
    alert("Masukan Angka!");
    hasilAkhirLuas.style.display = "none";
  }
}

// Get All Input Element
function getAllInput(inputElement) {
  for (var i = 0; i < inputElement.length; i++) {
    inputElement[i].value = "";
  }
}

function resetKeliling() {
  hasilAkhirKeliling.style.display = "none";
  getAllInput(inputKeliling);
}

function resetLuas() {
  hasilAkhirLuas.style.display = "none";
  getAllInput(inputLuas);
}
