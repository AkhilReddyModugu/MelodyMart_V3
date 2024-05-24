const express = require('express');
const cors= require('cors');
const connectDB = require('./config/db');
const messageRoutes = require('./routes/messageRoutes');
const dotenv=require('dotenv');

dotenv.config();
const app = express();

//Cross origin resource sharing 
app.use(cors());

// Connect to MongoDB
connectDB();

// Use messageRoutes for /api path
app.use('/api', messageRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
