class Car{
    start()
    {
        console.log("Car -> Starting the car!");
    }

    stop()
    {
        console.log("Stop the car");
    }
}

class Audi extends Car{
    override start()
    {
        console.log("Audi - Start");
    }

    engine()
    {
        console.log("Start the engine");
    }
}

let audi: Audi = new Audi()
audi.start()
audi.stop()
audi.engine()

//top casting
//child class object  can be referred by parent class reference

let c : Car = new Audi()
c.stop()