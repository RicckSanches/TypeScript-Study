/*
Не обязательно указывать ключи всем элементам. Достаточно указать его первому элементу и ключи следующих элементов будут увеличиваться по порядку. Пример:

        enum Season { Winter = 1, Spring, Summer, Autumn };

Проверим:

        let current: Season = Season.Summer;
        console.log(current); // выведет 3
 */

enum Fruits { Apples = 1, Bananas, Oranges, Grapes };
let myFruit: Fruits = Fruits.Grapes;
console.log(myFruit);
//4