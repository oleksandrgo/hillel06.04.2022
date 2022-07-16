/* 
function checkDivision(a, b) {
  if (b == 0) {
    console.log("На ноль делить нельзя")
    return
  }

  let remainder = a % b
  if (remainder == 0) {
    console.log("Делится")
  } else {
    console.log("Делится с остатком")
  }
}

checkDivision(15, 0)
checkDivision(15, 4)
checkDivision(15, 5) 
*/


/*function drawTriangle(height, symbol) {
  for (i = 1; i <= height; i++) {
    let row = ""
    for (j = 0; j < i; j++) {
      row += symbol
    }

    console.log(row)
  }
}
drawTriangle(4, "*")
*/



/*for (let i = 0; i < 100; i++) {

  if (i % 2) {
    console.log ( i );
  }
}
*/



/*
function halveThousand() {
  let n = 1000
  let iterations = 0

  do {
    n /= 2
    iterations++
  } while (n >= 50)

  console.log(`Получившееся число: ${n}`)
  console.log(`Количество итераций: ${iterations}`)
}

halveThousand()
*/


