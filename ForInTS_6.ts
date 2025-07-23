//Rewrite the following code using TypeScript:
/*
let obj = {a: 1, b: 2, c: 3};
let res = 0;

for (let key in obj) {
	let elem = obj[key];
	res += elem;
}

console.log(res);
 */

let obj: { [key: string]: number } = { a: 1, b: 2, c: 3 }; 
let res1: number = 0;

for (let key in obj) {
    res1 += obj[key];
}

console.log(res1);