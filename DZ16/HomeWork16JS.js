console.log("Task1");
var a;
var b;
a = 24;
b = 15;
var c = a/b - Math.floor(a/b);
if (c > 0) {
	console.log("Делится с остатком");
	console.log("Остаток = " + Math.round(c*b));
} else {
	console.log("Делится");
    console.log("Результат = " + a/b);
}

console.log("--------------------------");

/*console.log("Task1 - Varian2");
var a;
var b;
a = 115;
b = 4;
var c = a%b;
if (c != 0) {
	console.log("Делится с остатком");
	console.log("Остаток = " + c);
} else {
	console.log("Делится");
    console.log(a/b);
}

console.log("----------------------------");*/

/*console.log("Task2");

var lines = 10;
var row = " ";
var simbol = "*";
function printTriangle(lines, simbol) {for (var i = 0; i < lines; i++) {
  row += simbol;
  console.log(row);
}
}
printTriangle(lines, simbol);


console.log("----------------------------")*/

/*console.log("Task3");

let maxNumber = 100;
for (let a = 0; a < maxNumber; a++) {
  if (a % 2) {
    console.log( a );
  }

}

console.log("----------------------------")*/


/*console.log("Task4");

let n = 1000;
let numberIteration = 0;
do {
	n = n / 2;
	numberIteration++;
} while (n > 50);
console.log( "Resolt: n = " + n );
console.log( "NumberIteration: " + numberIteration );*/