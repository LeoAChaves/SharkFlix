const pesquisar = $(".pesquisar");
$(".nadaEncontrado").addClass("none");

function requisicao() {
  $(".resultado").html("");
  const titulo = $(".pesquisa-titulo").val();

  $.ajax({
    url: "https://www.omdbapi.com/?s=" + titulo + "&apikey=3168fe11",
    success: function (result) {
      if (result.Search == undefined) {
        $(".nadaEncontrado").removeClass("none");
        $(".apresentacao").addClass("none");
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
              const rating = $("<p>").text("IMDB rating: " + result.imdbRating);
              div.append(poster);
              div.append(titulo);
              div.append(p);
              div.append(plot);
              div.append(genre);
              div.append(runtime);
              div.append(rating);
              $(".resultado").append(div);
            },
          });
        });
        $(".nadaEncontrado").addClass("none");
        $(".apresentacao").addClass("none");
      }
    },
    error: function () {
      $(".nadaEncontrado").removeClass("none");
      $(".apresentacao").addClass("none");
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
