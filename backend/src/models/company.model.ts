import { model, models, Schema } from "mongoose";

type Company = {
  _id: Schema.Types.ObjectId;
  number: number;
  email: string;
  officialName: string;
  name: string;
  location: string;
  phoneNumber: string;
  officialLogo: string;
  logo: string;
  information: string;
  timesheet: string;
  registerNumber: string;
  totalProducts: number;
  websiteId: string;
};

const companySchema = new Schema<Company>(
  {
    number: {
      type: Number,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    officialName: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      unique: true,
    },
    location: {
      type: String,
      default: "online",
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    officialLogo: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      default: null,
    },
    information: {
      type: String,
      default: null,
    },
    timesheet: {
      type: String,
      default: null,
    },
    registerNumber: {
      type: String,
      required: true,
    },
    websiteId: {
      type: String,
      ref: "Website",
      required: true,
    },
    totalProducts: Number,
  },
  { timestamps: true },
);

const Company = models["Shop"] || model<Company>("Shop", companySchema);
export default Company;
