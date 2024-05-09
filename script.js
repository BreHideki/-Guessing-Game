//Variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;



//Eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener( "click" , handleResetClick);
document.addEventListener('keydown', handleEnterReset);

// Funções 
function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber");
    const guess = Number(inputNumber.value);

    if (guess < 1 || guess > 10) {
        alert("Por favor, digite um número entre 1 e 10.");
        return; 
    }


    if(guess == randomNumber) {
        toggleScreen()
        screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`
    }

    inputNumber.value = "";
    xAttempts++;
   
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1;
    randomNumber = Math.round(Math.random() * 10);
}


function toggleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

function handleEnterReset(event){
    if(event.key == "Enter" && screen1.classList.contains("hide")) {
        handleResetClick()
    }
}





