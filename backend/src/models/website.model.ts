import { model, models, Schema } from "mongoose";

type Website = {
  _id: Schema.Types.ObjectId;
  name: string;
  logo: string;
  subLogo: string;
  short_name: string;
  storeLocation: string;
  phone: string;
  address: string;
  timesheets: string[];
  totalProducts: number;
  totalUser: number;
  domain: string;
  subDomain: string;
  index: string;
  token: string;
};

const websiteSchema = new Schema<Website>(
  {
    name: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
    },
    subLogo: {
      type: String,
    },
    domain: String,
    subDomain: String,
    index: String,
    totalUser: Number,
    short_name: String,
    storeLocation: String,
    phone: String,
    address: String,
    token: String,
    timesheets: [
      {
        type: String,
      },
    ],
    totalProducts: Number,
  },
  {
    timestamps: true,
  },
);

const Website = models["Website"] || model("Website", websiteSchema);

export default Website;
