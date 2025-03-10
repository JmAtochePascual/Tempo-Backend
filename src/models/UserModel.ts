import mongoose from "mongoose";

// Create the user interface
interface UserInterface {
  name: string;
  email: string;
  password: string;
}

// Create the user schema
const userSchema = new mongoose.Schema<UserInterface>({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  }
}, {
  timestamps: true
});

// Create the user model
const User = mongoose.model("User", userSchema);
export default User;