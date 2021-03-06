const express = require('express');
const dotenv = require('dotenv');

//load config env
dotenv.config({path: './config/config.env'});

const app = express();
app.get('/', (req, res) => {
  res.send('gg')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));