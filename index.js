const express = require("express");
const { task1, task2 } = require("./controller");
const data_books = require("./Data");

const app = express();
const port = 3000;

app.get("/recent-books", (req, res) => {
  const recentBooks = task1(data_books);
  return res.json(recentBooks);
});

app.get("/search", (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ message: "Parameter not found" });
  }
  const result = task2(query, data_books);
  return res.json(result);
});

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
