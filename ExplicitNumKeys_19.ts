/*

Нумерация ключей в перечислениях не обязательно должна быть с нуля. Можно указать ключи в явном виде следующим образом:

enum Season { Winter = 1, Spring = 2, Summer = 3, Autumn = 4 };
Проверим:

let current: Season = Season.Winter;
console.log(current); // выведет 1

 */

enum Months { January = 1, February = 2, March = 3, April = 4, May = 5 , June = 6, Jule = 7, August = 8, September = 9, October = 10, November=11, December = 12 };

let currentMonth1: Months = Months.January;
let currentMonth5: Months = Months.May;
console.log(currentMonth1, currentMonth5);