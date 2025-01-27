const express = require('express'); //Import express library
const app = express(); //Creates an instance of express() and saves it in app variable
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const formattedDate = day + '/' + month

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: formattedDate
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: formattedDate
    }
  ];
  

app.get('/', (req,res) => {
    res.render('index', { messages: messages });
});

app.get('/new', (req, res) => {
    res.render('form');
})

app.post('/new', (req,res) => {
    const { messageText, messageUser } = req.body;
    messages.push({ text: messageText, user: messageUser, added: formattedDate });
    res.redirect("/");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening to requests on port ${PORT}`)
});