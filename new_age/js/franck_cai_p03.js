function actualizar(){
var data = new Date();
var horas = data.getHours();
    if(horas >= 8 && horas <=19)
    {   
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }else{
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        }
}


function toggle(){
    var element = document.body;
    element.classList.toggle("darkmode");
}
function successfull(){
    let comprobacion = document.forms["formulario"]["email"].value;
    if (comprobacion == ""){
        alert("Email must be filled out");
        return false;
    }
    var emailv = document.getElementById("email");
    document.getElementById("email").style.display="none";
    var email_containerv=document.getElementById("email_container");
    var email_valor=document.createTextNode(emailv.value);
    email_containerv.appendChild(email_valor);
    email_containerv.style.fontFamily ="'Montserrat', sans-serif";
    document.getElementById("submit").style.display="none";
    document.getElementsByClassName("enviado")[0].innerHTML="Email sent. Thank You!";
}



