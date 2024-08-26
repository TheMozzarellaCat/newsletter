const form = document.querySelector("form")

form.addEventListener('submit', e =>{
    e.preventDefault();

    function validateInput(input) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(input);
    }

    const emailInput = document.querySelector("#email-adress")
    const errorMessage = document.querySelector("span")
    const succesMessageBackground = document.querySelector(".succes-background")
    const thankingMessage = document.querySelector(".thanking-message")
    const dismissButton = document.querySelector(".dismiss-button")

    if(validateInput(emailInput.value)){    
        errorMessage.classList.remove("error-msg")
        emailInput.classList.remove("active")
        succesMessageBackground.style.display = "block"
        thankingMessage.innerHTML = `A confirmation email has been sent to <b>${emailInput.value}</b>. Please open it and click the button inside to confirm your subscription.`

    }else{
        errorMessage.classList.add("error-msg")
        emailInput.classList.add("active")     
    }
    dismissButton.addEventListener('click', ()=>{
        succesMessageBackground.style.display = "none"   
    })
})