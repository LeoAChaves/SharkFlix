// class PesquisaModel {
//   constructor() {
//     this._listaFilmes = [];
//   }
//   primeiraRequisicao(titulo) {
//     $.ajax({
//       url: "https://www.omdbapi.com/?s=" + titulo + "&apikey=3168fe11",
//       success: function (result) {
//         if (result.Search == undefined) {
//           $(".nadaEncontrado").removeClass("none");
//         } else {
//           //   console.log(result);
//           result.Search.forEach((filme) => {
//             // console.log(filme);
//             $.ajax({
//               url:
//                 "https://www.omdbapi.com/?i=" +
//                 filme.imdbID +
//                 "&apikey=3168fe11",
//               success: function (resultDois) {
//                 console.log(resultDois);
//                 // console.log(anotacao);
//                 // this._listaFilmes.push(anotacao);
//                 // return anotacao;
//               },
//             });
//           });
//           return this._listaFilmes;
//         }
//       },
//     });
//   }
// }
//   segundaRequisicao(primeroResultado) {
//     const segundoResultado = $.ajax({
//       url:
//         "https://www.omdbapi.com/?i=" +
//         primeroResultado.imdbID +
//         "&apikey=3168fe11",
//       success: function (result) {
//         this.poster = result.Poster;
//         this.titulo = result.Title;
//         this.ano = result.Year;
//         this.sinopse = result.Sinopse;
//         this.genre = result.Genre;
//         this.runtime = result.Runtime;
//         this.rating = result.Ratings[1].Value;

//         return segundoResultado;
//       },
//     });
//   }
