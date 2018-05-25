const express = require('express');

const port = process.env.port || 3000;
let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // res.send('<h1>Привет, Юзер!</h1>');
  res.send({
    name: 'Egor',
    likes: [
      'Mushrooms',
      'Books'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('<a href="http://localhost:3000/help.html">To bigger about page<a>');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Something gone wrong'
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
