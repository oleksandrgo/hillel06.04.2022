alert('Проверим делится ли число без остатка');
let a = parseInt(prompt('Введите делимое число'));
let b = parseInt(prompt('Введите делитель'));
let c = a % b;
let d = a / b;
if (c == 0) {
	alert('Делится! ' + 'Результат = ' + d);
} else {
	alert('Делится с остатком = ' + c);
}

 // Треугольник в консоле

let symbol = "^"; 
let height = 9;
function triangleInConsole (e, f) {
	for (let i = 0; i < e; i++){
		f += "^";
		console.log(f);
	}
}

triangleInConsole (height, symbol); 

// Нечетные числа
let k = 0;
for (let i = 0; i <100; i++) {
	k += 1;
	let l = k % 2;
		if (l !== 0) {
			// не поняла куда именно выводить)
			document.write(k + '<br>');
			console.log(k);
		} else {
			continue;
		}
}


let n = 1000;
let count = 0;

for (let i = 0; i < 10; i++) {
	n = n / 2;
	count += 1;
	if (n < 50) {
		document.write("Результат деления - " + n + " и количество итераций - " + count);
		break
	}
}