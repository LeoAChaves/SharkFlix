const metodoPesquisa = $(".metodo-pesquisa");
const pesquisar = $(".pesquisar");
metodoPesquisa.change(function () {
  $(".nadaEncontrado").addClass("none");
  if (metodoPesquisa.val() == 1) {
    $(".barraDePesquisa").removeClass("none");
    $(".pesquisa-titulo").removeClass("none");
    $(".pesquisa-ano").addClass("none");
  } else if (metodoPesquisa.val() == 2) {
    $(".barraDePesquisa").removeClass("none");
    $(".pesquisa-titulo").addClass("none");
    $(".pesquisa-ano").removeClass("none");
  } else {
    $(".barraDePesquisa").addClass("none");
    $(".pesquisa-titulo").addClass("none");
    $(".pesquisa-ano").addClass("none");
  }
});
function requisicao() {
  const metodo = $(".metodo-pesquisa");
  if (metodo.val() == 1) {
    $(".resultado").html("");
    const titulo = $(".pesquisa-titulo").val();
    $.ajax({
      url: "https://www.omdbapi.com/?s=" + titulo + "&apikey=3168fe11",
      success: function (result) {
        if (result.Search == undefined) {
          $(".nadaEncontrado").removeClass("none");
        } else {
          console.log(result.Search);
          result.Search.forEach((filme) => console.log(filme.Title));
          result.Search.forEach((filme) => console.log(filme.Year));
          result.Search.forEach((filme) => {
            if (filme.Poster != "N/A") {
              const div = $("<div>");
              const poster = $("<img>").attr("src", filme.Poster);
              const titulo = $("<h3>").text(filme.Title);
              const p = $("<p>").text(filme.Year);
              div.append(poster);
              div.append(titulo);
              div.append(p);
              $(".resultado").append(div);
            }
          });
        }
      },
      error: function () {
        $(".nadaEncontrado").removeClass("none");
      },
    });
  }
  // else if (metodo.val() == 2) {
  //   alert("caiu no else if");
  //   $(".resultado").html("");
  //   const ano = $(".pesquisa-ano").val();
  //   $.ajax({
  //     url: "https://www.omdbapi.com/?y=" + ano + "&apikey=3168fe11",
  //     success: function (result) {
  //       alert("success");
  //       if (result.Search == undefined) {
  //         $(".nadaEncontrado").removeClass("none");
  //         alert("undefined");
  //       } else {
  //         console.log(result.Search);
  //         result.Search.forEach((filme) => console.log(filme.Title));
  //         result.Search.forEach((filme) => console.log(filme.Year));
  //         result.Search.forEach((filme) => {
  //           if (filme.Poster != "N/A") {
  //             alert("sem poster");
  //             const div = $("<div>");
  //             const poster = $("<img>").attr("src", filme.Poster);
  //             const titulo = $("<h3>").text(filme.Title);
  //             const p = $("<p>").text(filme.Year);
  //             div.append(poster);
  //             div.append(titulo);
  //             div.append(p);
  //             $(".resultado").append(div);
  //           }
  //         });
  //       }
  //     },
  //     error: function () {
  //       alert("error");
  //       console.log(result.Search);
  //       $(".nadaEncontrado").removeClass("none");
  //     },
  //   });
  // }
  else {
    $(".nadaEncontrado").removeClass("none");
    alert("caiu no else");
  }
}
pesquisar.click(requisicao);
