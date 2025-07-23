//

function sum(x:number, y:number) {
    return x + y;
}
//---------------------------------------------
function summer(arr: number[]):number {
    let res: number = 0;

    for (let num of arr) {
        res += num;
    }

    return res;
}

//----------------------------------------------
let elem : number = 0;

function func(text: string):void {
    console.log(elem);
}