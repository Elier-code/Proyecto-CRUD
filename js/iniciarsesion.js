/*
Usuarios tipo gerente
    - usuario : gerente
    - password : 123

Usuarios tipo administrador
    - usuario : admin
    - password : 123

Usuarios tipo vendedor
    - usuario : vendedor
    - password : 123

*/
function iniciarSesion(){
    var usuario = document.getElementById("usuario")
    var password = document.getElementById("password")
    switch(usuario.value){
        case "gerente":
            if(password.value == "123"){
                window.location.href = "../html/menugerente.html"
            }else{
                siEsErroneo()
            }
            break;
        case "admin":
            if(password.value == "123"){
                window.location.href = "../html/menuadminstrador.html"
            }else{
                siEsErroneo()
            }
            break;
        case "vendedor":
            if(password.value == "123"){
                window.location.href = "../html/menuvendedor.html"

            }else{
                siEsErroneo()
            }

    }
}
function siEsErroneo(){
    alert("Usuario y/o contraseña erronea")
    usuario.value = ""
    password.value = ""
    usuario.focus()
}
//codigo limpio