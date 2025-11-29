import { model, models, Schema } from "mongoose";

type Signature = {
  _id: Schema.Types.ObjectId;
  timestamp: number;
  signature: string;
  apiKey: string;
  cloudName: string;
  folder: string;
  websiteId: string;
};

const signatureSchema = new Schema<Signature>(
  {
    timestamp: {
      type: Number,
    },
    signature: {
      type: String,
      required: true,
    },
    websiteId: {
      type: String,
      ref: "Website",
      required: true,
    },
    apiKey: {
      type: String,
      required: true,
    },
    cloudName: {
      type: String,
      required: true,
    },
    folder: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Signature =
  models["Signature"] || model<Signature>("Signature", signatureSchema);

export default Signature;
