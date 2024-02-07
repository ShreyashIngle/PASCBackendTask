const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is connected successfully");
});

//Books Api Routes: GET, POST, PUT, DELETE
let books = [
  {
    id: 1,
    name: "Harry Potter",
    author: "J.K. Rowling",
  },
  {
    id: 2,
    name: "The Alchemist",
  },
  {
    id: 3,
    name: "The Da Vinci Code",
  },
];

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (password == "1234") {
    res.send("login successfull! welcome " + username);
  } else {
    res.send("invalid password");
  }
});

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/books", (req, res) => {
  res.send(books);
});

app.post("/addbook", (req, res) => {
  var id = req.body.id;

  switch (id) {
    case 1:
      res.send(books[0]);
      break;
    case 2:
      res.send(books[1]);
      break;
    case 3:
      res.send(books[2]);
      break;

    default:
      break;
  }
});

app.listen(8000, () => {
  console.log("App is live on localhost/8000");
});
