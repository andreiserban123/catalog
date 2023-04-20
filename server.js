const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();
const cors = require('cors');

//Body parser middleware
app.use(express.json());

app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'http://localhost:5000',
      'http://127.0.0.1:5000',
      'http://127.0.0.1:5173',
    ],
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to the OnlineCatalogue API...' });
});

const catalogueRouter = require('./routes/catalogue');
app.use('/api/catalogue', catalogueRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
