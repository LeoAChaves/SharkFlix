const chamarController = new CadastroController()

$('#btn').click(function(e) {


    e.preventDefault()

    chamarController.conversarComModel($('#cep').val())

})