let myCar = {

    maxSpeed: 50,

    driver: 'Brian',
    
    drive: function(speed, time){

        console.log(speed * time)

    },

    logDriver: function(){

        console.log('Driver\'\s name is ' + this.driver)
        
    }

}


console.log(myCar.maxSpeed, myCar.driver)

myCar.drive(50, 3)

myCar.logDriver()