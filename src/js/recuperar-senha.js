// Função destinada à recuperação de Senha do usuário
let listaMail = [];
let listaPass = [];
let listaRepass = [];

$(".salvar").click((e) => {
  e.preventDefault();
  let mail = $("#email").val();
  let pass = $("#pass").val();
  let repass = $("#re-pass").val();
  let envio = $(".textorecupera");
  listaMail.push(mail);
  listaPass.push(pass);
  listaRepass.push(repass);
  if (mail != "") {
    if (pass === repass && pass != "" && repass != "") {
      envio.html("Email Enviado com sucesso!");
      envio.css("color", "green");
      envio.css("border", "1px solid green");
      envio.css("border-radius", "5px");
    } else {
      envio.html("Senhas Diferentes");
      envio.css("color", "red");
      envio.css("border", "1px solid red");
      envio.css("border-radius", "5px");
    }
  } else {
    envio.html("Digite um Email Valido");
    envio.css("color", "red");
    envio.css("border", "1px solid red");
    envio.css("border-radius", "5px");
  }
});
