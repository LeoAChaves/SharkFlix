"use strict";

// Função do botão Login
$('.login').click(function (e) {
  e.preventDefault();
  var mail = $('#email').val();
  var pass = $('#pass').val();
  var envio = $('.textorecupera');

  if (mail != "") {
    if (pass != "") {
      envio.html('Login efetuado com sucesso!');
      envio.css('color', 'green');
      envio.css('border', '1px solid green');
      envio.css('border-radius', '5px');
      location.replace(URL = "../index.html");
    } else {
      envio.html('Senha Invalida');
      envio.css('color', 'red');
      envio.css('border', '1px solid red');
      envio.css('border-radius', '5px');
    }
  } else {
    envio.html('Digite um Login Valido');
    envio.css('color', 'red');
    envio.css('border', '1px solid red');
    envio.css('border-radius', '5px');
  }
});