document.addEventListener("DOMContentLoaded",()=>{


let password = document.querySelector("#adressMail");
let mail = document.querySelector("#password");

let change_text = document.querySelector(".verif_text")

let submmit = document.querySelector(".subconnect")


submmit.addEventListener("click",()=>{
    alert(password.value)
    alert(mail.value)
})

})