import mongoose from 'mongoose';

const connection = {}; // Connection cache

const connectMongoDB = async () => {
  if (connection.isConnected) {
    // Use existing connection
    return;
  }

  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('MongoDB URI is not defined in the environment variables.');
    }

    // Connect to MongoDB
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connection.isConnected = conn.connections[0].readyState === 1; // 1 means connected
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exiting the process if there's an error
  }
};

export default connectMongoDB;
