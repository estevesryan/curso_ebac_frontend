let btn_form = document.getElementById('btn-form')

btn_form = document.addEventListener('submit', (e) => {
    e.preventDefault()

    const n1 = document.getElementById('n1').value
    const n2 = document.getElementById('n2').value

    if(n1 > n2) {
        window.alert("Formulario invalido: O segundo numero precisa ser maior que o primeiro")
    } else {
        window.alert("Formulario enviado com sucesso")
    }
})