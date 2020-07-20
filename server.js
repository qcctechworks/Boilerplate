const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 4000;



app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/api/students', (req,res) => {
    const students = [
        { id: 1, firstName: 'Captain', lastName: "Fancy"},
        { id: 2, firstName: 'John', lastName: 'Buttercup'}
    ]
    res.json(students);
});

app.listen(port, () => {
    console.log(`Server Started on Port # ${port}`);
});


