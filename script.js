const colorChanger = document.querySelector("#color-changer")

const colors = ["Blue", "Green", "Yellow", "Red", "Pink", "Purple"]

let counter =  0



const changeColor = () =>{

       colorChanger.style.backgroundColor = colors[counter]

       counter++

}



setInterval(changeColor, 3000) 