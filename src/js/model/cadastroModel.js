class CadastroModel {

    conexaoCep(cep) {

        if (cep.length == 8) {

            var conexao = $.ajax({
                dataType: "json",
                url: `https://viacep.com.br/ws/${cep}/json/`,
                async: false,

            }).responseJSON;

            if (conexao.erro == true) {
                alert("cep erraddo main")
            } else {
                return conexao
            }
        }
    }
}