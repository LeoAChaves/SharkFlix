class CadastroController {

    constructor() {}


    conversarComModel(buscarCEP) {

        let dados = new CadastroModel() // conversando com o irmão cadastroModel

        var teste = dados.conexaoCep(buscarCEP) // vai me retornar 1 para quando o cep nn existir ou retorna um obj com os campos

        console.log(dados.conexaoCep(buscarCEP));

        let complementos = new CadastroView() // Conversando com o irmão cadastroView

        complementos.mostrarDados(teste)

    }

}