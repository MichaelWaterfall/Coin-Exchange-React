const express = require('express');
const Axios = require('axios');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/news', async (req, res) => {
  const response = await Axios.request(
    "https://newsapi.org/v2/everything?q=crypto&sortBy=publishedAt&language=en&apiKey=ab195a26389e4cce9deca55240a35f85"
);
    res.send(response.data).json;
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});