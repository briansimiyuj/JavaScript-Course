let myCar = {

    maxSpeed: 50,

    driver: 'Brian',
    
    drive: function(speed, time){

        console.log(speed * time)

    },

    test: function(){

        console.log(this) // 'This' refers to the current Object

    }

}


console.log(myCar.maxSpeed, myCar.driver)

myCar.drive(50, 3)

myCar.test()