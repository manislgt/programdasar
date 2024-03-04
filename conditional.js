// Cara membuat conditional (if else) di Javascript
/* if (kondisi) {
   kode program jika kondisi true
}
else {
   kode program jika kondisi false
} */

// Soal 2
let x = 0
function cekParameter(x){
  if(x){
    return "Ini parameternya " + x
  } else {
    return "Tidak ada parameter yang diberikan"
  }
}
console.log(cekParameter(x))
