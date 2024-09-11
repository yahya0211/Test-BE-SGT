const task1 = (books) => {
  const currentYear = new Date().getFullYear();
  return books.filter((book) => currentYear - book.year <= 10);
};

const task2 = (query, books) => {
  const lowerCaseQuery = query.toLowerCase();

  return books.filter((book) => {
    return book.title.toLowerCase().includes(lowerCaseQuery) || book.author.toLowerCase().includes(lowerCaseQuery) || book.year.toString().includes(lowerCaseQuery) || book.genre.toLowerCase().includes(lowerCaseQuery);
  });
};

module.exports = { task1, task2 };
