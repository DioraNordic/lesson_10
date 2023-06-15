//  простые переменные

//let number = 123 // число целочисленное

let number1 = 12.43 // число с плавающей точкой
// // строка
let string = 'some string'
// //булева
let boolean = true
let boolean_1 = false
// //неопределенное
let undef = undefined
// let undef_1 = NaN
// let undef_2 = null
// // символ
let symb = Symbol('some')
//
// // составные переменные
//
// // массив (однотипные данные)
let array = []
//
// // объект (словарь)
let obj = {}
//
// // функция
let func = function (a, b, c) {}
let func1 = (a, b, c) => {}
function func2(a, b, c) {}
//
let value
value = 1432
//
const yep = 'value'
// // yep = 'other value' нельзя менять const/ работает только с простыми типами данных
//
const obj1 = {key: 'value'}
// // obj1 = [] тоже ошибка
obj.key // 'value'
obj1.key = 'value1' // это нормально
//
// const arr = []
// arr.push('string')
//
// console.log('this array', arr)

const numb = 0//parseInt(prompt('Введите число: '))
// console.log('number - ', numb)
// console.log(typeof numb)
// console.log(typeof parseInt(numb))

const num = 0//parseInt(prompt('Введите число: '))
let res = ''
if (num === NaN) {
     res = 'Введено не число'
 }
 else if (num > 10) {
     res = 'Число больше заданного'
 }
 else if (num === 10) {
    res = 'Вы угадали'
 }
 else {
    res = 'Число меньше загаданного'
}
// alert(res)

// const a = 10
// const b = 20
// let c
// c = a + b
// c = a * b
// c = a - b
// c = a / b
// c = a ** b
// c = a % b
//
// console.log(c)

const number_1 = 0//parseInt(prompt('Введите первое число'))
const number_2 = 0//parseInt(prompt('Введите второе число'))
let sign = 0//prompt('Введите знак операции')

// if (sign === '+') {
//     alert(number_1 + number_2)
// } else if (sign === '-') {
//     alert(number_1 - number_2)
// } else if (sign === '*') {
//     alert(number_1 * number_2)
// } else if (sign === '/') {
//     alert(number_1 / number_2)
// } else {
//     alert('Error')
// }

// if (Number.isNaN(number_1) || Number.isNaN(number_2)) {
//     alert('Некорректные числа')
// } else {
//     let res
//     switch (sign) {
//         case '*':
//             res = number_1 * number_2
//             break
//         case '/':
//             res = number_1 / number_2
//             break
//         case '+':
//             res = number_1 + number_2
//             break
//         case '-':
//             res = number_1 - number_2
//             break
//         case '%':
//             res = number_1 % number_2
//             break
//         case '**':
//             res = number_1 ** number_2
//             break
//         default:
//             res = undefined
//     }
//
//     if (res === undefined) {
//         alert('Некорректная операция')
//     } else {
//         alert('Итог: ' + res)
//     }
// }

 for (let i = 0; i < 10; i++) {
   console.log('Итерация №: ', i )
}

let flag = true

while(flag) {
   const n = Math.round(Math.random() * 99 + 1)
     flag = n % 4 !==3
     console.log(n)
 }

// let i = 0
// do {
//     console.log('+')
// }
// while (i > 0)


const number = +prompt('Введите число: ');
let random =  Math.round(Math.random() * 9 + 1)

if (Number.isNaN(number)){
    alert("Введено не число")
}
else if(number  > random || number < random){

alert("Попробуйте еще раз")

}
    
else if (number === random){
    alert("Вы угадали!")
}

