console.log("task 1")

let a = 26;
let b = 3;
if(a%b == 0) {
    console.log ('Делится' + a/b);
} else {
    console.log ('Остаток от деления' + a%b);
}



console.log('task 2');

function drawTriangle(linesNumbers) {
let space = '*';
for (let i = 0; i < linesNumbers; i++){
 console.log(space);
 space += '*';
}
}
drawTriangle(5);



console.log("task 3");

 for (let x =0; x <= 100; x++) {
     if ((x % 2) != 0){
         console.log(x);
     }
  }


console.log("task 4");

let n = 1000;
let number = 0;
 while (n >= 50) {
   n = n / 2;
   number += 1;
 }
 console.log(n);
 console.log(number);




