const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Create MySQL connection
const db = mysql.createConnection({
  host: '220.158.232.172',
  user: 'product_mh01',
  password: 'cL6sC3iRnWc3APyK',
  database: 'product_mh01'
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    return;
  }
  console.log('Connected to MySQL!');
});

// Routes
app.get('/', (req, res) => {
  db.query('SELECT * FROM your_table', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
