class infoFilmesView {
  populate(titulo, poster, year, duration, genre, sinopse, tomato, bilheteria) {
    this.setTitle(titulo);
    this.setPoster(poster);
    this.setYear(year);
    this.setDuration(duration);
    this.setGenre(genre);
    this.setSinopse(sinopse);
    this.setTomato(tomato);
    this.setBilheteria(bilheteria);
  }
  setTitle(titulo) {
    $(".titulo").text(titulo);
  }
  setPoster(poster) {
    $(".capa").attr("src", poster);
  }
  setYear(year) {
    $(".ano").text(year);
  }
  setDuration(duration) {
    $(".tempo").text(duration);
  }
  setGenre(genre) {
    $(".genero").text(genre);
  }
  setSinopse(sinopse) {
    $(".descricao").text(sinopse);
  }
  setTomato(tomato) {
    $(".premios").text(tomato);
  }
  setBilheteria(bilheteria) {
    $(".bilheteria").text(bilheteria);
  }
}
