nombreLocalStorage = "secuencia"


function getValorSecuenciaPaciente(){
    secuecias = getJSONDeLocalStore(localStorage)
    if (secuecias.length == 0) {

        secuencia = new Secuencia()
        secuecias.push(secuencia)

    }

    secuecias[0].autonumericoPaciente += 1

    setJSONDeLocalStore(nombreLocalStore, secuecias)

    return secuecias[0].autonumericoPaciente
}
