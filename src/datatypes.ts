let name: string = 'Karthick'
console.log(name);

let age: number = 22
console.log(age);

let isTrue: boolean = true
console.log(isTrue);

let noValue:null = null
console.log(noValue);
console.log(typeof noValue);

let noSet:undefined = undefined
console.log(noSet);

let userName: string = 'MI';
console.log(userName);

let bigNum :bigint = 100n
console.log(bigNum);

let value : any = 'Hello Typescript'
console.log(value, typeof value);

let setValue: unknown = 'Hi Karthick'
console.log(setValue);

//Function that never returns
function throwsomeerror(message:string)
{
    throw new Error(message)
}

throwsomeerror('Error Function! no return')

function pageLoading() : never
{
    while(true)
    {
        console.log("Hello World");
    }
}

//pageLoading();

//Array

let scoreCard : number[] = [123,34,45,67,44]
scoreCard.push(4)

console.log(scoreCard);

let browsers: string [] = ['chrome', 'edge', 'safari']
console.log(browsers.splice(0,1,'opera'));
console.log(browsers);

let employeeID : (number | string)[] = ['R1',2]
console.log(employeeID); 

//tuple - static array - Fixed length and fixed type per position
let tuples : [string, boolean, number] = ['karthick', true, 33]
console.log(tuples);

//objects

let userObject :{name: string, age: number, isActive: boolean}  = 
{
    name: 'Karthick',
    age: 18,
    isActive: true
}

//Sequence does not matter!
let mumbaiIndians : {name: string | number, runs:number, isCaptain: boolean} =
{
    name: 'Rohit Sharma',
    runs: 4567,
    isCaptain: true
}

console.log(mumbaiIndians);

//enums - Collection of constant values

enum status{
    Open,
    ReOpen,
    New,
    Closed,
    Assigned,
    Fixed
}

console.log(status);

/*{
  '0': 'Open',
  '1': 'ReOpen',
  '2': 'New',
  '3': 'Closed',
  '4': 'Assigned',
  '5': 'Fixed',
  Open: 0,
  ReOpen: 1,
  New: 2,
  Closed: 3,
  Assigned: 4,
  Fixed: 5
}*/

console.log(status.Open);

enum IPLteams{
    MI = 'Mumbai Indians',
    CSK = 'Chennai Super Kings',
    RCB = 'Royal Challengers Bengaluru',
    DC = 'Delhi Capitals'
}

console.log(IPLteams.MI);

//Union type

let userID : string | number = 'RT101'
userID = 1000

//Literal Types - Exact values only
let httpStatusCode : 200 | 404 | 503;
httpStatusCode = 200
console.log(httpStatusCode);

//Functions
function add (): number{
    return 100
}

console.log(add());

function uniontype () : string | number{
    return 'Karthick'
}

function getNumbers (): number []
{
    return [2,3,4,5,3]
}

function Numbers (): (number | string) []
{
    return [2,3,4,5,3]
}

let arrowFunction = 
(x:number, y: number):number =>
{
    return x+y;
}

let result = arrowFunction(100,400)
console.log(result);

//promises
function promiseFunction() : Promise<number|string>
{
    let flag: boolean = true;
    return new Promise((resolve, reject)=>
    {
        if(flag)
        {
            resolve('Success')
        }
        else{
            reject('Failuire')
        }
    })
}

let results = await promiseFunction();
console.log(results);