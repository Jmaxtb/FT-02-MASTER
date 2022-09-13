

// let titulo = document.getElementById("title")

// let titulo = document.querySelector("#title")

// console.log(titulo)
/*
let boton = document.querySelector("#btn")

boton.addEventListener("click", function (e) {

    console.log(e)
    let input = document.querySelector("#input")

    if (input.value) {

        let lista = document.getElementById("lista")
        let nuevoElement = document.createElement("li")
        //
        nuevoElement.innerText = input.value

        lista.appendChild(nuevoElement)

        input.value = ""
    } else {
        alert("PONE UNA COMIDA CHEEEE")
    }
})

*/
const n = parseInt(Math.random*100)
let num = parseInt(prompt("Adivina el numero"))

function adivina(num) {
    
    if(n === num){
        console.log("Ganaste")
    }  
    else if(n < num){
        console.log("Es un numero menor")
        num = parseInt(prompt("Adivina el numero"))
        adivina(num)
    }
    else if(n > num){
        console.log("Es un numero mayor")
        num = parseInt(prompt("Adivina el numero"))
        adivina(num)
    }
    
}
adivina(num);