import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true, lowercase: true },
  email: { type: String, required: true, unique: true },
  isVerified: { type: Boolean, default: false },
  forgotPassWordToken: { type: String },
  forgotPassWordExpires: { type: Date },
  verificationToken: { type: String },
  verificationExpires: { type: Date },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
