import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MongoDB URI is not defined in the environment variables.");
    }
    
    await mongoose.connect(uri); // No need for useNewUrlParser and useUnifiedTopology anymore
    
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exiting the process if there's an error
  }
};

export default connectMongoDB;