const express = require("express");
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const adminsRoutes = require('./routes/adminsRoutes');
const userRoutes = require('./routes/userRoutes');

const bodyParser = require('body-parser');

const path = require('path')

const app = express()
const PORT = process.env.PORT || 4000;
dotEnv.config();

const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected successfully!"))
    .catch((error) => console.log(error))

app.use(bodyParser.json());
app.use('/admin', adminsRoutes);
app.use('/user', userRoutes);
app.use('/uploads', express.static('uploads'));

app.listen(PORT, () => {
    console.log(`server started and running at ${PORT}`);
});

app.use('/', (req, res) => {
    res.send("<h1> Welcome to social media");
})