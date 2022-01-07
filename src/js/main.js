
// const pesquisaController = new PesquisaController();
// pesquisaController.pegarFilmes("Batman");


// $('#fechar').click(function() {
//     $('#videoT').each(function(){ 
//         let frame = document.getElementById("videoT");
//         frame.contentWindow.postMessage(
//             '{"event":"command","func":"pauseVideo","args":""}',
//             '*'); 
//     });
// });


// Função do botão Salvar

let listaMail = [];
let listaPass = [];
let listaRepass = [];

$('.salvar').click((e)=>{
    e.preventDefault();    
    let mail = $('#email').val()
    let pass = $('#pass').val()
    let repass = $('#re-pass').val()
    listaMail.push(mail);
    listaPass.push(pass);
    listaRepass.push(repass);
    console.log(listaMail , listaPass , listaRepass)
    
})


// // função para salvar os dados do login do usuário no cache do navegador
// function salvar() {
//    let mail = [];
//    let pass = [];
//    let repass = [];    
//    mail = document.getElementById('email').value;
//    pass = document.getElementById('pass').value;
//    repass = document.getElementById('re-pass').value;  
//    console.log(mail)
// }



// localStorage.info = document.getElementById('email').value;
    // if (document.getElementById('pass').innerHTML === document.querySelector('.pass').innerHTML) {
        
    //     localStorage.info = document.getElementById('pass').value;
    // }else{
    //     alert('Password Invalido');
    // }

// função para Exibir os valor de email no cache do navegador
// function exibirValores () {
//     if (localStorage.info) {
//         document.getElementById('email').value = localStorage.info;
//         document.getElementById('pass').value = localStorage.info;
//     }
//     // falta o parametro para exibição

// }

// validação de cadastro de email e senha de usuário
// function validar() {
//     if (localStorage.info.email === document.getElementById(email) && localStorage.info.pass === document.getElementById('pass')){
//         onload(window())
//     }
    
// }

// const controller = new PesquisaController();





