class CadastroView {


    verEmail(resp) {

        if (resp == true) {
            $('#emailCorreto').text("")
        } else {
            $('#emailCorreto').text("E-mail Incorreto!")
        }

    }

    verSenha(resp) {

        if (resp == true) {

            $('#senhaCorreta').text("")

        } else {

            $('#senhaCorreta').text("A senha devem ser iguais!")
        }
    }



    mostrarDados(resposta) {

        $('#rua').val(resposta.logradouro)
        $('#bairro').val(resposta.bairro)
        $('#cidade').val(resposta.localidade)
        $('#estado').val(resposta.uf)

    }




}