
function requisicao(id){
    $.ajax({
       url: "http://www.omdbapi.com/?i=" + id +"&apikey=3168fe11",
       success:function(result){
               $(".titulo").text(result.Title)
               $(".capa").attr("src",result.Poster)
               $(".lancamento").text(result.Released)
               $(".ano").text(result.Year)
               $('.tempo').text(result.Runtime)
               $('.genero').text(result.Genre)
               $('.diretor').text(result.Director)
               $('.escritor').text(result.Writer)
               $('.ator').text(result.Actors)
               $('.descrisao').text(result.Plot)
               $('.idioma').text(result.Language)
               $('.pais').text(result.Country)
               $('.premios').text(result.Awards)
               $('.bilheteria').text(result.BoxOffice)
               $('.dvd').text(result.DVD)
               
               
           }
       })
   
}
requisicao(id)







