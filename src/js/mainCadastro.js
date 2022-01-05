const chamarController = new CadastroController()

$('#btn').click(function() {



    chamarController.conversarComModel($('#cep').val())

    chamarController.confereEmail($('#email').val())

    chamarController.confereSenha($('#senha').val(), $('#subSenha').val())



})

$('#formPessoal').submit((e) => {

    e.preventDefault()
    location.replace((url = "../html/login.html"))

})