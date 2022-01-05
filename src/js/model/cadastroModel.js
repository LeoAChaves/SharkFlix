class CadastroModel {

    conexaoCep(cep) {

        if (cep.length == 8) {

            var conexao = $.ajax({
                dataType: "json",
                url: `https://viacep.com.br/ws/${cep}/json/`,
                async: false,

            }).responseJSON;

            if (conexao.erro == true) {
                $('#cepCorreto').text("CEP inválido!")
            } else {

                $('#cepCorreto').text('')

                return conexao
            }
        }
    }


    verifiarSenha(senha, subsenha) {

        if (senha == subsenha && senha != "" && subsenha !== "") {
            return true
        } else {
            return false
        }
    }

    verificarEmail(email) {

        let arr = email.split("")
        let tamanho = arr.filter((arroba) => arroba == "@").length

        if (tamanho == 1) {
            return true
        } else {
            return false
        }

    }



}