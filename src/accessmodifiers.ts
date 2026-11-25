class Car{
    name: string = 'Hyundai'
    public model : string = "i10"
    protected fuel : string = "petrol"
    private engineNumber: number = 3432532532
    readonly logo:string = "mylogo"
    getVehicleinfo(): void{
        console.log(this.model);
        console.log(this.fuel);
        console.log(this.engineNumber);
    }
}
class Audi extends Car{

    model:string = "Audi"

    getVehicleinfo(): void {
        console.log(this.model);
        console.log(this.fuel);
        //console.log(this.engineNumber); //Property 'engineNumber' is private and only accessible within class 'Car'.
    }
}
let car = new Car();
console.log(car);
car.model;