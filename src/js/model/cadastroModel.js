class CadastroModel {

    constructor() {

        this._rua = "",
            this._bairro = "",
            this._cidade = "",
            this._estado = ""

    }

    conexaoCep(cep) {

        $.getJSON(`https://viacep.com.br/ws/${cep}/json/`, function(resposta) {

            if (resposta.erro == true) {

                alert("Cep invalido!")

            } else {

                $('#rua').val(resposta.logradouro)
                $('#bairro').val(resposta.bairro)
                $('#cidade').val(resposta.localidade)
                $('#estado').val(resposta.uf)

            }

        })

    }

}