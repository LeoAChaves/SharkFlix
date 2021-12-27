class CadastroView {

    mostrarDados(resposta) {

        if (resposta.erro == "true") {
            alert("Cep Ìnvalido!")
        } else {

            $('#rua').val(resposta.rua)
            $('#bairro').val(resposta.bairro)
            $('#cidade').val(resposta.cidade)
            $('#estado').val(resposta.estado)
        }


    }


}