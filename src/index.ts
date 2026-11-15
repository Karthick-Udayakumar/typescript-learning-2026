let x : number = 100
// x = 'Karthick' //Type 'string' is not assignable to type 'number'.ts(2322)

let name : string = 'Karthick'

let isStatus : boolean = true;

function add (x: number, y:number) : number
{
    return x + y;
}

let value = add(100,200);
console.log(value);

function getName(): string{
    return 'Karthick'
}

function print() : void{
    console.log("Void function");
}

function getNumbers(): number[]{
    return [10,30,40]
}

let addresults  = (a: number ,b: number) : number => a-b;
let t1: number = addresults(400,200)
console.log(t1);
