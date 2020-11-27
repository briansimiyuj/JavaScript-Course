let myCar = new Object() 

myCar.maxSpeed = 50

myCar.driver = 'Brian'


console.log(myCar.driver)


myCar.drive = function (){

    console.log('Now driving')

} 


myCar.drive()