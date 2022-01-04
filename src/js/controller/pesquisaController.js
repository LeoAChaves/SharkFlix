const metodoPesquisa = $(".metodo-pesquisa");
const pesquisar = $(".pesquisar");
$(".barraDePesquisa").addClass("none");
$(".pesquisa-titulo").addClass("none");
$(".pesquisa-ano").addClass("none");
$(".nadaEncontrado").addClass("none");
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
  const titulo = $(".pesquisa-titulo").val();
  $.ajax({
    url: "https://www.omdbapi.com/?s=" + titulo + "&apikey=3168fe11",
    success: function (result) {
      if (result.Search == undefined) {
        $(".nadaEncontrado").removeClass("none");
      } else {
        console.log(result.Search);
        result.Search.forEach((filme) => console.log(filme.Title));
      }
    },
    error: function () {
      $(".nadaEncontrado").removeClass("none");
    },
  });
}
pesquisar.click(requisicao);

// class PesquisaController {
//   addResultado() {}
// }
