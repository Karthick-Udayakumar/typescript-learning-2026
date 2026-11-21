//interface - used to create/define schema

interface userSchema{
    name: string,
    age? : number,
    isMarried? : boolean
}

let user: userSchema = {
    name: 'Karthick',
    age : 14,
}
interface company{
    companyName: string
}
interface employee {
    name: string,
    age: number,
    employeeID: number,
    status: boolean
}

interface department extends employee, company{
    departmentName: string,
    departmentID: number
}

let employeedetails : department = {
    companyName: 'IBM',
    name: 'Karthick',
    age: 18,
    employeeID: 6777,
    status: true,
    departmentName: 'IT',
    departmentID: 101
}

console.log(employeedetails);

//Multiple common interface

interface Car {
    brandName: string
}

interface Car{
    model: string
}

let myCar : Car = {
    brandName: 'Hyundai',
    model: 'Bayon'
}

console.log(myCar.brandName, myCar.model);

type Person = {
    name: string
}

type Company = Person & {
    companyName: string
}

let userDetails : Company = {
    name: 'Rohit',
    companyName: 'Amazon'
}

type Status = 'Qualified' | 'Eliminated' | 'Winner' | 'Runner Up'
let teamStatus : Status = 'Qualified'

//type with primitive data

type userID = string | number
type userName = string

let userdetail : userID = 'ID1001'
console.log(userdetail);

let userdetail1: userID = 1100
console.log(userdetail1);

let username : userName = 'LLM001'
console.log(username);