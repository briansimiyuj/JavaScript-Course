let myCar = {

    maxSpeed: 50,

    driver: 'Brian',
    
    drive: function(speed, time){

        console.log(speed * time)

    }

}


console.log(myCar.maxSpeed, myCar.driver)

myCar.drive(50, 3)