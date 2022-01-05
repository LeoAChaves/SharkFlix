"use strict";

// Função do botão Salvar
var listaMail = [];
var listaPass = [];
var listaRepass = [];
$('.salvar').click(function (e) {
  e.preventDefault();
  var mail = $('#email').val();
  var pass = $('#pass').val();
  var repass = $('#re-pass').val();
  var envio = $('.textorecupera');
  listaMail.push(mail);
  listaPass.push(pass);
  listaRepass.push(repass);

  if (mail != "") {
    if (pass === repass && pass != "" && repass != "") {
      envio.html('Email Enviado com sucesso!');
      envio.css('color', 'green');
      envio.css('border', '1px solid green');
      envio.css('border-radius', '5px');
    } else {
      envio.html('Senhas Diferentes');
      envio.css('color', 'red');
      envio.css('border', '1px solid red');
      envio.css('border-radius', '5px');
    }
  } else {
    envio.html('Digite um Email Valido');
    envio.css('color', 'red');
    envio.css('border', '1px solid red');
    envio.css('border-radius', '5px');
  }
});