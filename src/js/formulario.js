$("#form-contato").submit( ()=>{

    let nome = $("#nome-contato")
    let email = $("#email-contato")
    let msg = $("#texto-contato")

    let erro = $(".alert")
    let erroContato = $("#erro-contato")

    //removendo o elemento da tela quando o usuario submite corretamente
    erro.addClass("d-none")
    $(".is-invalid").removeClass("is-invalid")
    

    if(nome.val() == ''){
        erro.removeClass("d-none")
        erroContato.html("nome") //nome do campo que não foi preenchido
        nome.focus()
        nome.addClass("is-invalid")
        return false
    }else{
        nome.addClass("is-valid")
    }

    if(email.val() == ''){
        erro.removeClass("d-none")
        erroContato.html("email") //nome do campo que não foi preenchido
        email.focus()
        email.addClass("is-invalid")
        return false
    }else{
        email.addClass("is-valid")
    }

    if(msg.val() == ''){
        erro.removeClass("d-none")
        erroContato.html("mensagem") //nome do campo que não foi preenchido
        msg.focus()
        msg.addClass("is-invalid")
        return false
    }else{
        msg.addClass("is-valid")
    }

    return false
})