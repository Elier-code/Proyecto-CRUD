var localStorage = "empleados"

function reuperarDatosFormulario(){
    this.nombre = document.getElementById("nombre")
    this.cedula = document.getElementById("cedula")
    this.apellido =  document.getElementById("apellido")
    this.salario = document.getElementById("salario")
}
function limpiarFormulario(){
    cedula.value = ""
    nombre.value = ""
    apellido.value = ""
    salario.value = ""
}
function guardar(){
    reuperarDatosFormulario()
    var empleado =  new Empleado(cedula.value, nombre.value, apellido.value, salario.value)
    var empleados = getJSONDeLocalStore(localStorage)
    empleados.push(empleado)
    setJSONDeLocalStore(localStorage, empleados)
    limpiarFormulario()
    alert("El empleado ha sido agregado correctamente")
}
function consultar(){
    reuperarDatosFormulario()
    this.empleados = getJSONDeLocalStore(localStorage)
    var indiceEmpleado = buscarIndiceEmpleado()
    if(indiceEmpleado != -1){

        nombre.value = empleados[indiceEmpleado].nombre
        apellido.value = empleados[indiceEmpleado].apellido
        salario.value = empleados[indiceEmpleado].salario
    }
    
}
function actualizar(){
    reuperarDatosFormulario()
    this.empleados = getJSONDeLocalStore(localStorage)
    var indiceEmpleado = buscarIndiceEmpleado()
    if(indiceEmpleado != -1){
        empleados[indiceEmpleado].nombre = nombre.value
        empleados[indiceEmpleado].apellido = apellido.value
        empleados[indiceEmpleado].salario = salario.value
    }
    setJSONDeLocalStore(localStorage, empleados)
    limpiarFormulario()
    alert("El empleado ha sido actualizado correctamente")
}
function buscarIndiceEmpleado(){
    var resultado = -1
    for (let i = 0; i < empleados.length; i++) {
        if (empleados[i].cedula == cedula.value) {
            resultado = i
        }
        
    } 
    return resultado
    
}
function eliminar(){
    var indiceEmpleado = buscarIndiceEmpleado()
    var empleados = getJSONDeLocalStore(localStorage)
    if(indiceEmpleado != -1){
        alert("Empleado "  + empleados[indiceEmpleado].cedula + " eliminado")
        empleados.splice(indiceEmpleado, 1)
        setJSONDeLocalStore(localStorage,empleados)
    }
}