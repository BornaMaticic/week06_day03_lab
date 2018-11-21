const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getFilmTitles = function () {
  const titles = [];
  this.films.forEach((film) => {
    titles.push(film.title)
  });
  return titles;
};

Cinema.prototype.findByTitle = function (title) {
   let foundfilm;
   for (film of this.films) {
     if (film.title === title) {
       foundfilm = film;
     }
   }
  return foundfilm;
};


Cinema.prototype.filterByGenre = function (genre) {
  const result = this.films.filter(film => film.genre === genre);
  return result;
};

Cinema.prototype.checkIfYear = function (year) {
  return this.films.some(film => film.year === year);
};

module.exports = Cinema;
