//Optional parameter
//Optional parameter should be written after the required parameter
//Optional parameter - Not mandatory and declared with '?'

function getFoodBill(foodbill:number,tax?:number): void
{
    if(tax)
    {
        console.log(foodbill + tax);
    }
    console.log(foodbill);
}

getFoodBill(1000);

//Optional parameter with default value
//No question mark is needed if value is assigned.

function calculateprice(amount: number, discount:number = 0) : number
{
    return amount - (amount * discount)/100
}

let resultnodiscount = calculateprice(100,5)
console.log(resultnodiscount);

let result = calculateprice(100,5)
console.log(result);