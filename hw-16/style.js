alert("Hello Sasha");



var a = 10;
var b = 3;
var rest = a % b;
if (rest != 0) {
	document.write('Divided with the remainder: ' + rest);
} else {
	document.write('Divides, the result of division: ' + (a / b));
}


document.write ("<pre>------------------- \n <\/pre>");


for (var i = 2; i < 100; i += 2) {
	document.write( i+'<br>' );
}


document.write ("<pre>------------------- \n <\/pre>");


for (let n = 1000, num = 0; n > 50; num++)
{
	n /= 2;
	num++;
	document.write( n+'<br>' );
}


document.write ("<pre>------------------- \n <\/pre>");



document.write ("<pre>* \n <\/pre>");
document.write ("<pre>* * \n <\/pre>");
document.write ("<pre>* * * \n <\/pre>");
document.write ("<pre>* * * * \n <\/pre>");
document.write ("<pre>* * * * * \n <\/pre>");
document.write ("<pre>* * * * * * \n <\/pre>");
document.write ("<pre>* * * * * * * \n <\/pre>");


document.write ("<pre>------------------- \n <\/pre>");

var lines = 7;
var str = " ";
var star = "*";
for (var i = 0; i < lines; i++) {
  str += star;
  console.log(str);
}


console.log("*");
console.log("**");
console.log("***");
console.log("****");
console.log("*****");
console.log("******");
console.log("*******");






