// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let str = ''
for (let i = 20; i <= 30; i = i + 0.5) {
    str += i + ' ';
}
console.log(str.trim());
console.log("=========");

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

let dollar = 27;
for (let i2 = 10; i2 <= 100; i2 = i2 + 10) {
    console.log(i2 * dollar)
}
console.log("=========");

// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
const integer = prompt("Enter an integer");
let i3 = 1;
if (integer > 0) {
    do {
        console.log(i3);
        i3++;
    } while (i3 ** 2 <= integer && i3 <= 100);
}
console.log("=========");

// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

let isPrimeOrNot = prompt("Введіть число")
if (isPrimeOrNot <= 1) {
    console.log("Число не є простим")
} else if (isPrimeOrNot >= 2) {
    i = 2;
    while (i <= isPrimeOrNot) {
        if (isPrimeOrNot % i == 0 && i != isPrimeOrNot) {
            console.log("Число не є простим");
            break;
        }
        else if (i == isPrimeOrNot) {
            console.log('Бінго')
        }
        i++;
    }
}
console.log("=========");

// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна). 

let number = +prompt("Введіть число");

while (number % 3 == 0) {
    console.log('number', number)
    number = number/3;
}
if (number == 1) {
    console.log("Так, можна")
} else {
    console.log("Ні, не можна")
}
console.log("=========");