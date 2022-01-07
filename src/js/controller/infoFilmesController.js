async function requisicaoInfoFilmes(id) {
  return await $.ajax({
    url: "https://www.omdbapi.com/?i=" + id + "&apikey=3168fe11",
  });
}
