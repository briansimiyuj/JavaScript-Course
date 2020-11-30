const message = document.querySelector("#message")   

console.log(message)


const showMessage = () =>{

       message.className = "show"

}


setTimeout(showMessage, 3000)