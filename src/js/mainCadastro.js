const chamarController = new CadastroController()

$('#btn').click(function(e) {

    //  e.preventDefault()

    chamarController.conversarComModel($('#cep').val())

    chamarController.confereEmail($('#email').val())

})

$('#formPessoal').submit(() => {

    alert("tentou enviar")


})