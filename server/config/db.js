const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    // Replace the process.env.MONGODB_URI with your MongoDB connection URI directly
    const conn = await mongoose.connect('mongodb+srv://singhravisingh178:K0Sz0mpGxl3Chgx3@cluster0.tklj2uu.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
