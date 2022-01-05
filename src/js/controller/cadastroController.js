class CadastroController {

    constructor() {}


    conversarComModel(buscarCEP) {

        let dados = new CadastroModel() // conversando com o irmão cadastroModel


        let preencher = dados.conexaoCep(buscarCEP) // vai me retornar 1 para quando o cep nn existir ou retorna um obj com os campos


        let complementos = new CadastroView() // Conversando com o irmão cadastroView

        complementos.mostrarDados(preencher)

    }

    confereEmail(email) {

        let conferir = new CadastroModel()

        let resposta = conferir.verificarEmail(email)

        let emailView = new CadastroView()

        emailView.verEmail(resposta)

    }

    confereSenha(senha, subsenha) {

        let conferirSenha = new CadastroModel()

        let pedir = conferirSenha.verifiarSenha(senha, subsenha)

        let senhaView = new CadastroView()

        senhaView.verSenha(pedir)

    }




}