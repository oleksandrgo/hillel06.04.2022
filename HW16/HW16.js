/*task#1*/

let a = prompt('Введите A');
let b = prompt('Введите B');
let c = 0;
if (a % b === 0)
{
  c = a % b;
  alert("Введенные числа деляться, результат деления: " + c);
}
else if (a % b !== 0){
  c = a % b;
  alert("Введенные числа НЕ деляться, остаток: 0" +c);
}
else
{
  alert("Something went wrong, try again");
}


/*task#2*/

let a = 7;
let b ='*';
let string='';
function elka(a,b){
  for (let x = 0; x < a; x++) {
    string = string + b;
    return string;
  }
}
console.log(elka(string));


/*task#3*/

for(let x=0; x <100; x++){
  if(x % 2 === 0){
    continue;
  }
  console.log(+x);
}

/*task#4*/
let n = 1000;
let b = 0;
while(n >= 50)
{
  n=n/2;
  b+=1;
}
console.log('Результат: ' +n+' после '+b+' итераций деления на два.');