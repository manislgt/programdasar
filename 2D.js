//Soal 1 (segitiga)
function printTriangle(num) {
  for (let i = 0; i < num; i++) {
    let str = "";
    for (let j = 0; j < (i + 1); j++) {
      str += "*";
    }
    console.log(str);
  }
}
printTriangle(5)
//Soal 2 (persegi)
function printsquare(num) {
for (let i = 0; i < num; i++) {
  let str = "";
   for (let j = 0; j < num; j++) {
    str += "*";
  }
  console.log(str);
}
}
printsquare(6)
