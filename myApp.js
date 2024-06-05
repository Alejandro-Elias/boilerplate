const mongoose = require('mongoose');
require('dotenv').config();

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.3gunrw3.mongodb.net/boilerpalte?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    auth: {
        user: process.env.MONGO_USER,
        password: process.env.MONGO_PASSWORD
    }
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('Error connecting to MongoDB Atlas:', err));
