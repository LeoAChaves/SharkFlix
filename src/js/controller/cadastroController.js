class CadastroController {
  constructor() {}
  conversarComModel(buscarCEP) {
    let dados = new CadastroModel();
    let preencher = dados.conexaoCep(buscarCEP);
    let complementos = new CadastroView();
    complementos.mostrarDados(preencher);
  }
  confereEmail(email) {
    let conferir = new CadastroModel();
    let resposta = conferir.verificarEmail(email);
    let emailView = new CadastroView();
    emailView.verEmail(resposta);
  }
  confereSenha(senha, subsenha) {
    let conferirSenha = new CadastroModel();
    let pedir = conferirSenha.verifiarSenha(senha, subsenha);
    let senhaView = new CadastroView();
    senhaView.verSenha(pedir);
  }
}
