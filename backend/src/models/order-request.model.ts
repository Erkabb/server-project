import { model, models, Schema } from "mongoose";

type OrderRequest = {
  _id: Schema.Types.ObjectId;
  projectType: string;
  features: [string];
  budget: string;
  timeline: string;
  description: string;
  website: string;
  user: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  company: {
    name: string;
    email: string;
    phoneNumber: string;
  };
  websiteId: string;
};

const orderRequestSchema = new Schema<OrderRequest>({
  projectType: {
    type: String,
    required: true,
  },
  features: {
    type: [String],
    required: true,
  },
  budget: {
    type: String,
    required: true,
  },
  timeline: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    default: "website",
  },
  user: {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
  },
  company: {
    name: String,
    email: String,
    phoneNumber: String,
  },
  websiteId: {
    type: String,
    ref: "Website",
    required: true,
  },
});

const OrderRequest =
  models["OrderRequest"] ||
  model<OrderRequest>("OrderRequest", orderRequestSchema);
export default OrderRequest;
