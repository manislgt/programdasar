/* Perulangan atau looping adalah suatu bentuk kegiatan mengulang suatu statement sampai batas yang diinginkan */
/* Contoh syntax looping
1. For
for(let i = 0, i < 10, i++)
2. For in
var obj = {a: 1, b: 2, c: 3};
for (var prop in obj) {
  console.log(prop + ': ' + obj[prop]);
}
3. For of
var arr = [1, 2, 3];
for (var elem of arr) {
  console.log(elem);
}
4. While 
var i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
5. Do while
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
*/

//Soal 1 (looping angka)
function printNumber(num){
  for (let i = 0; i <= num; i++){
   console.log(i) 
  } 
}
printNumber(3)

// Soal 2 (cek angka ganjil atau genap)
function cekGanjilGenap(angka){
  if(angka % 2 == 0)
    return "Genap"
    else {
      return "Ganjil"
    }
  }
console.log(cekGanjilGenap(4))
console.log(cekGanjilGenap(7))
