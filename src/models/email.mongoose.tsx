import { Model, Schema, Document } from "mongoose";
import mongoose from "mongoose";

interface EmailModel extends Document {
  emailID: string;
  ownerID: string;
  ownerName: string;
  email: string;
  title: string;
  content: string;
}
// define email schema
const emailSchema = new mongoose.Schema(
  {
    emailID: String,
    ownerID: String,
    ownerName: String,
    email: String,
    title: String,
    content: String,
  },
  {
    timestamps: true,
  }
);
const Email: Model<EmailModel> = mongoose.model<EmailModel>(
  "Emails",
  emailSchema
);

export default Email;
