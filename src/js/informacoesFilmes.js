window.onload = async function () {
  // id da url da pagina
  // usar id na requisicao
  // popular view
  const id = GetMovieIdFromUrl();
  const result = await requisicaoInfoFilmes(id);
  console.log(result);
  new infoFilmesView().populate(
    result.Title,
    result.Poster,
    result.Year,
    result.Runtime,
    result.Genre,
    result.Plot,
    result.imdbRating,
    result.BoxOffice
  );
};
function GetMovieIdFromUrl() {
  const queryString = window.location.search;
  const parameters = new URLSearchParams(queryString);
  const id = parameters.get("i");
  return id;
}
