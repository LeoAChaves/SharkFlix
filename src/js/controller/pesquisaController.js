const metodoPesquisa = $(".metodo-pesquisa");
const pesquisar = $(".pesquisar");

function requisicao() {
  $(".resultado").html("");
  const titulo = $(".pesquisa-titulo").val();
  $.ajax({
    url: "https://www.omdbapi.com/?s=" + titulo + "&apikey=3168fe11",
    success: function (result) {
      if (result.Search == undefined) {
        $(".nadaEncontrado").removeClass("none");
      } else {
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
        $(".nadaEncontrado").addClass("none");
      }
    },
    error: function () {
      $(".nadaEncontrado").removeClass("none");
    },
  });
}
pesquisar.click(requisicao);

$(".pesquisa-titulo").keypress(function (e) {
  var key = e.which;
  if (key == 13) {
    $("input[name = butAssignProd]").click();
    return false;
  }
});
