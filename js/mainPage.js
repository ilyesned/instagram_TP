document.addEventListener("DOMContentLoaded",()=>{
    let userMail = localStorage.getItem('adressemail');
    let userMailShow = document.querySelector(".aboutUser")
    let userMailShow_second = document.querySelector(".text_welcome")
    
    userMailShow.textContent=("Voici votre compte "+userMail)
    userMailShow_second.textContent=("Bonjour "+userMail)

})