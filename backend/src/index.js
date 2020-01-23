const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); //serve pra deixar exportar a api
const routes = require('./routes');

const app = express();

//MongoDB (Não-relacional) 
mongoose.connect('mongodb+srv://augusto:feijao@cluster0-q8ojo.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);