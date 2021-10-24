const mysql = require('mysql2');
const express = require('express');
const { json } = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //Your MySQL username,
        user: 'root',
        //Your MySQL Password
        password: '1998Hlsg8sql',
        database: 'election'
    },
    console.log('Connected to the election database')
);

//test GET function 
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

// test connection to MySQL
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });

//GET a single candidate's info
db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
    if (err) {
        console.log(err);
    }
    console.log(row);
});

// Delete a candidate 
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

//Query for Create Operation
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
    VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});



// route for non-supported requests - This must be after all others as it is a catch all route
app.use((req, res) => {
    res.status(404).end();
});

// function to start express on PORT 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});