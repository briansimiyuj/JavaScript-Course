// Constructor function starts with an Uppercase character

let Car = function(maxSpeed, driver) {

    this.maxSpeed = maxSpeed    

    this.driver = driver

    this.drive = function(speed, time){

        console.log(speed * time)

    } 


    this.logDriver = function(){

        console.log('Driver\'\s name is ' + this.driver)    

    }

}


let myCar = new Car(80, "Brian")

let myCar1 = new Car(70, "Alice")

let myCar2 = new Car(80, "Bob")

let myCar3 = new Car(60, "Michael")


myCar3.drive(70, 5)

console.log(myCar1.driver)

myCar3.logDriver()    