function guardar(){
    var cedula = document.getElementById("cedula")
    var nombre = document.getElementById("nombre")
    var apellido =  document.getElementById("apellido")
    var salario = document.getElementById("salario")
    empleado =  new Empleado(cedula.value, nombre.value, apellido.value, salario.value)
    var empleados = JSON.parse(localStorage.getItem("empleados")  || "[]")
    empleados.push(empleado)
    localStorage.setItem("empleados", JSON.stringify(empleados))
    console.log(empleado)
    cedula.value = ""
    nombre.value = ""
    apellido.value = ""
    salario.value = ""
    
}
function actualizar(){
    var cedula = document.getElementById("cedula")
    var empleados = JSON.parse(localStorage.getItem("empleados")  || "[]")
    var cedula = document.getElementById("cedula")
    var nombre = document.getElementById("nombre")
    var apellido =  document.getElementById("apellido")
    var salario = document.getElementById("salario")
    for (const empleado of empleados) {
        if (empleado.cedula == cedula.value) {
            console.log("lo encontre")
            
            empleado.nombre = nombre.value
            empleado.apellido = apellido.value
            empleado.salario = salario.value
            
            break
        }
        
    }
    localStorage.setItem("empleados",JSON.stringify(empleados))
}
function eliminar(){
    var cedula = document.getElementById("cedula")
    var empleados = JSON.parse(localStorage.getItem("empleados")  || "[]")
    for (let i = 0; i < empleados.length; i++) {
        if(empleados[i].cedula == cedula.value){
            alert("Empleado "  + empleados[i].cedula + " eliminado")
            empleados.splice(i, 1)
            localStorage.setItem("empleados", JSON.stringify(empleados))
            break
        }  
    }

}
function consultar(){
    var cedula = document.getElementById("cedula")
    var empleados = JSON.parse(localStorage.getItem("empleados")  || "[]")

    for (const empleado of empleados) {
        if (empleado.cedula == cedula.value) {
            console.log("lo encontre")
            var nombre = document.getElementById("nombre")
            var apellido =  document.getElementById("apellido")
            var salario = document.getElementById("salario")
            nombre.value = empleado.nombre
            apellido.value = empleado.apellido
            salario.value = empleado.salario
            break
        }
        
    }

}
function nuevo(){

}