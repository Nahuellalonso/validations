let form = document.querySelector('.needs-validation');
var email = document.getElementById("email");
var cont1 = document.getElementById("password1");
var cont2 = document.getElementById("password2");
var divCont2 = document.getElementById("divcont2");
var user = document.getElementById("nombre");
var calle = document.getElementById("calle");
var numero = document.getElementById("numero");
var genero = document.getElementById("genero");

document.addEventListener('DOMContentLoaded', function() {

function checkRepCont() {
    if (!cont2.value || cont1.value !== cont2.value) {
        divCont2.textContent = "Las contraseñas no coinciden";
        cont2.setCustomValidity("Las contraseñas no coinciden");
        cont2.classList.remove("is-valid"); // Quitar la clase "is-valid"
        cont2.classList.add("is-invalid");  // Agregar la clase "is-invalid"
        return false;
    } else {
        divCont2.textContent = "Las contraseñas coinciden";
        cont2.setCustomValidity(""); // Restablecer el mensaje de validación personalizado
        cont2.classList.remove("is-invalid"); // Quitar la clase "is-invalid"
        cont2.classList.add("is-valid");  // Agregar la clase "is-valid"
        return true;
    }
}

function checked(){
    if (!check.checked){
        check.classList.add("is-invalid");
        return false;
    }else{
        check.classList.remove("is-invalid");
        check.classList.add("is-valid");
        return true;
    }
}

user.addEventListener("input",function() {
    userName();
});

function userName(){
    if (!user.checkValidity()) {
        user.classList.remove("is-valid");
        user.classList.add("is-invalid");
        return false;
    }else{
        user.classList.remove("is-invalid");
        user.classList.add("is-valid");
        return true;
    }  
}

email.addEventListener("input",function() {
    emailValid();
});

function emailValid(){
    if (!email.checkValidity()) {
        email.classList.remove("is-valid");
        email.classList.add("is-invalid");
        return false;
    }else{
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
        return true;
    }  
}

cont1.addEventListener("input",function() {
    passwordValid();
});

function passwordValid(){
    if (!cont1.checkValidity()) {
        cont1.classList.remove("is-valid");
        cont1.classList.add("is-invalid");
        return false;
    }else{
        cont1.classList.remove("is-invalid");
        cont1.classList.add("is-valid");
        return true;
    }  
}

cont1.addEventListener("input",function() {
    passwordValid();
});

function passwordValid(){
    if (!cont1.checkValidity()) {
        cont1.classList.remove("is-valid");
        cont1.classList.add("is-invalid");
        return false;
    }else{
        cont1.classList.remove("is-invalid");
        cont1.classList.add("is-valid");
        return true;
    }  
}

calle.addEventListener("input",function() {
    calleComplete();
});

function calleComplete(){
    if (!calle.checkValidity()) {
        calle.classList.remove("is-valid");
        calle.classList.add("is-invalid");
        return false;
    }else{
        calle.classList.remove("is-invalid");
        calle.classList.add("is-valid");
        return true;
    }  
}

numero.addEventListener("input",function() {
    numeroCasa();
});

function numeroCasa(){
    if (!numero.checkValidity()) {
        numero.classList.remove("is-valid");
        numero.classList.add("is-invalid");
        return false;
    }else{
        numero.classList.remove("is-invalid");
        numero.classList.add("is-valid");
        return true;
    }  
}

genero.addEventListener("input",function() {
    generoValid();
});

function generoValid(){
    var feedbackElement = document.getElementById('generoFeedback');
    if (genero.value === "") {
        genero.classList.remove("is-valid");
        genero.classList.add("is-invalid");
        feedbackElement.style.display = 'block';
        return false;
    } else {
        genero.classList.remove("is-invalid");
        genero.classList.add("is-valid");
        feedbackElement.style.display = 'none';
        return true;
    }  
}



form.addEventListener("submit",(e) => {
    if (!userName() || !emailValid() || !passwordValid() || !checkRepCont() || !calleComplete() || !numeroCasa() || !generoValid()){
        e.preventDefault();
        e.stopPropagation();
        checked();
        console.log("mal")
    }else{
        console.log("bien")
    }

    form.classList.add('was-validated')
})

cont2.addEventListener("input", checkRepCont)

check.addEventListener("click", checked)

})