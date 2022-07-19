alert("Hello Sasha");



document.write ("<pre>------------------- \n <\/pre>");



start=0; finish=100;
num=start-(start%2)+1;
while(num<=finish) {
  document.write(num+'<br>');
  num+=2;
}

document.write ("<pre>------------------- \n <\/pre>");



for (var num = 1000, i = 0; num > 50; num = num / 2, i++);
 document.write(num);
 document.write(num='<br>');
 document.write(i);


document.write ("<pre>------------------- \n <\/pre>");



/*var lines = 7;
var str = " ";
var star = "*";
for (var i = 0; i < lines; i++) {
  str += star;
  console.log(str);
}*/



 var i = 0,
  j = 0;
var max = 7;
var space = "",
  star = "";
while (i < max) {
  space = "";
  star = "";
  for (j = 0; j < 1 * i + 1; j++) star += "*";
  console.log(space + star);
  i++;
}
