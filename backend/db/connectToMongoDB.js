import mongoose from "mongoose";
const MONGO_DB_URI =
  "mongodb+srv://user:z1OoheclB06GxVER@cluster0.rhayeki.mongodb.net/CHAT?retryWrites=true&w=majority";
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_DB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
};

export default connectToMongoDB;
