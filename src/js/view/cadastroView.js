class CadastroView {


    verEmail(resp) {

        $('#emailCorreto')

    }



    mostrarDados(resposta) {

        $('#rua').val(resposta.logradouro)
        $('#bairro').val(resposta.bairro)
        $('#cidade').val(resposta.localidade)
        $('#estado').val(resposta.uf)

    }




}