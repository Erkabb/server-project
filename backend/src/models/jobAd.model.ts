import mongoose, { Document, Schema } from "mongoose";

export interface IJobAd extends Document {
  title: string;
  description: string;
  company: string;
  location: string;
  salary?: number;
  postedBy: mongoose.Types.ObjectId; // reference to User
  createdAt: Date;
  updatedAt: Date;
}

const JobAdSchema = new Schema<IJobAd>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: Number },
    postedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IJobAd>("JobAd", JobAdSchema);