async function requisicaoInfoFilmes(id) {
  return await $.ajax({
    url: "//www.omdbapi.com/?i=" + id + "&apikey=3168fe11",
  });
}
