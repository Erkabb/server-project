import { Schema, models, model } from "mongoose";

type Brand = {
  _id: Schema.Types.ObjectId;
  websiteId: string;
  name: string;
  brandLogo: string;
  subLogo: string;
  totalProducts: number;
};

const brandSchema = new Schema<Brand>(
  {
    // number: {type: Number, unique: true},
    name: { type: String, required: true },
    websiteId: { type: String, required: true, ref: "Website" },
    brandLogo: { type: String, required: true },
    subLogo: { type: String },
    totalProducts: { type: Number, default: 0 },
  },
  { timestamps: true },
);

const Brand = models["Brand"] || model<Brand>("Brand", brandSchema);
export default Brand;
