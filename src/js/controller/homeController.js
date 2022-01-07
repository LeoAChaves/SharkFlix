class CapaController {
  static buscaFilme(){
      let arrayFilmes = [];
      for(let filme of arrayFilmes){
          let model = new PesquisaModel();
          model.fazRequest(filme,() => {let view = new PesquisaView(); view.update(model)});
      }
  }
  static paginaDePesquisa(){
      localStorage.setItem('novoFilme', document.getElementById("nomeFilme").value);
      location.href="../../html/informacaofilme.html";
  }
  static pegaFilme(){
      localStorage.setItem('novoFilme', document.getElementById("nomeFilme").value);
      location.href="../../html/informacaofilme.html";
  }
  static buscaFilmebarra(){
      let model = new PesquisaModel();
      model.fazRequest(localStorage.getItem('novoFilme'),() => {let view = new PesquisaView(); view.updatePesquisa(model)});
  }
  static buscaFilmeImg(filme){
      localStorage.setItem('novoFilme', filme);
      location.href="../../html/informacaofilme.html";
  }

}
document.querySelector('#formulario').addEventListener("submit",(event)=>{event.preventDefault()});























// function requisicao(id) {
//   $.ajax({
//     url: "http://www.omdbapi.com/?i=" + id + "&apikey=3168fe11",
//     success: function (result) {
//       $(".titulo").text(result.Title);
//       $(".capa").attr("src", result.Poster);
//       $(".lancamento").text(result.Released);
//       $(".ano").text(result.Year);
//       $(".tempo").text(result.Runtime);
//       $(".genero").text(result.Genre);
//       $(".diretor").text(result.Director);
//       $(".escritor").text(result.Writer);
//       $(".ator").text(result.Actors);
//       $(".descrisao").text(result.Plot);
//       $(".idioma").text(result.Language);
//       $(".pais").text(result.Country);
//       $(".premios").text(result.Awards);
//       $(".bilheteria").text(result.BoxOffice);
//       $(".dvd").text(result.DVD);
//     },
//   });
// }
// requisicao(id)





