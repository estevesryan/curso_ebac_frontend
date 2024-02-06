$(document).ready(() => {
    $('#tel').mask('00 0 0000-0000', {
        placeholder: '99 9 9999-9999'
    })
    $('#cpf').mask('000.000.000-00')

    $('#cep').mask('00000-000')
})