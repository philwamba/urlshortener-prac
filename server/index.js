const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use(helmet());
app.use('./public');

app.get('/', (req, res) => {
  res.json({
    message: '👋 URL Shortener Prac'
  });
});

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`)
});
