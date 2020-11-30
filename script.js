const colorChanger = document.querySelector("#color-changer")

const colors = ["Blue", "Green", "Yellow", "Red", "Pink", "Purple"]

let counter =  0



const changeColor = () =>{

       if (counter >= colors.length) {
              
              counter = 0

       }

       colorChanger.style.backgroundColor = colors[counter]

       counter++

}



setInterval(changeColor, 3000) 