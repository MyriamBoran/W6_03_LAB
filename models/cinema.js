const Cinema = function(films) {
  this.films = films;
};

Cinema.prototype.showListTitles = function() {
  return this.films.map(film => film.title);
};

Cinema.prototype.findFilmByTitle = function(title) {
  return this.films.find(film => film.title === title);
};

Cinema.prototype.filterFilmsByGenre = function(genre) {
  return this.films.filter(film => film.genre === genre);
};

Cinema.prototype.isFilmByYear = function(year) {
  const isYear = film => {
    return year === film.year;
  };
  return this.films.some(isYear);
};

Cinema.prototype.findFilmByLength = function(length) {
  return this.films.filter(film => film.length >= length);
};

Cinema.prototype.calculateTotalFilmTime = function() {
  // const reducer = (accumulator, film) => accumulator + film.length;
  return this.films.reduce((accumulator, film) => {
    return accumulator + film.length;
  }, 0);
};

module.exports = Cinema;
