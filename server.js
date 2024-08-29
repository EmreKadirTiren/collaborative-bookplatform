const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const { userInfo } = require('os');

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

if(mongoose.connection) {
    console.log('Connected to MongoDB');
}
else {
    console.log('Error connecting to MongoDB');
}



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});