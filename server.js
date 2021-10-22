const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//test GET function 
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

// route for non-supported requests - This must be after all others as it is a catch all route
app.use((req, res) => {
    res.status(404).end();
});

// function to start express on PORT 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});