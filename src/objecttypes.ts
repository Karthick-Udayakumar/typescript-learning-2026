let user : {name: string, age: number, isActive: boolean}= {
    name: 'Karthick',
    age: 40,
    isActive: true
}

type userType = {
    name: string,
    Team: string,
    IPLtrophies: number,
    isActive? : boolean, //Optional value
    company? : 'IBM'
}

let mumbaiIndians:userType = {
    name: 'Rohit Sharma',
    Team: 'Mumbai Indians',
    IPLtrophies: 6,
    isActive: true
}
console.log(mumbaiIndians);

let csk : userType = {
    name: 'MSD',
    Team: 'Chennai super kings',
    IPLtrophies: 5,
}