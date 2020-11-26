function getAverage(a, b){

    let average = (a + b) / 2   // Local variable

    console.log(average)

    return average

}

let result = getAverage(7, 12)  // Global variable


function logResult (){

    console.log("The average is " + result)

} 


logResult()