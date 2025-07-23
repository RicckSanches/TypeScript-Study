//Rewrite the following code using TypeScript:
/*
let arr = [1, 2, 3, 4, 5];
let res = 0;

for (let elem of arr) {
	res += elem;
}

console.log(res);
 */

let array: number[] = [1, 2, 3, 4, 5, 6, 7];
let res: number = 0;

for (let elem of array) {
    res += elem;
}
console.log(res);