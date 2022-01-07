// class PesquisaController {
//   pegarFilmes(titulo) {
//     const model = new PesquisaModel();
//     const teste = model.primeiraRequisicao(titulo);
//     console.log(teste);
//     // console.log(model);
//     const view = new PesquisaView();
//   }
// }

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
          $.ajax({
            url:
              "https://www.omdbapi.com/?i=" + filme.imdbID + "&apikey=3168fe11",
            success: function (result) {
              const div = $("<div>");
              const poster = $("<img>").attr("src", result.Poster);
              const titulo = $("<h3>").text(result.Title);
              const p = $("<p>").text(result.Year);
              const plot = $("<p>").text("Sinopse: " + result.Plot);
              const genre = $("<p>").text("Genre: " + result.Genre);
              const runtime = $("<p>").text("Runtime: " + result.Runtime);
              const rating = $("<p>").text(
                "Rotten Tomatoes rating: " + result.Ratings[1].Value
              );
              div.append(poster);
              div.append(titulo);
              div.append(p);
              div.append(plot);
              div.append(genre);
              div.append(runtime);
              div.append(rating);
              $(".resultado").append(div);
              console.log(result);
            },
          });
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
