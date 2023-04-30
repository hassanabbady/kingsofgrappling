const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/kings", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("DB Connected Successfully !");
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;
