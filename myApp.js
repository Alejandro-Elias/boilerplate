const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGO_URI

mongoose.connect( uri, { useNewUrlParser: true, useUnifiedTopology: true });
