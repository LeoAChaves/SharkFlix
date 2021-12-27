class CadastroController {

    constructor() {}


    conversarComModel(buscar) {

        const dados = new CadastroModel() // conversando com o irmão cadastroModel

        dados.conexaoCep(buscar) // vai me retornar 1 para quando o cep nn existir ou retorna um obj com os campos

        //   const complementos = new CadastroView() // conversando com o irmão cadastroView

        //  complementos.mostrarDados(fazerConexao)

    }

}