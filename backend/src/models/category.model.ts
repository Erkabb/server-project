import { models, model, Schema } from "mongoose";

type Category = {
  _id: Schema.Types.ObjectId;
  categoryName: string;
  totalProducts: number;
  color: string;
  borderColor: string;
  badge: string;
  icon: string;
  iconColor: string;
  description: string;
};
const categorySchema = new Schema<Category>(
  {
    categoryName: {
      type: String,
      required: true,
    },
    totalProducts: {
      type: Number,
      default: 0,
    },
    color: String,
    icon: String,
    borderColor: String,
    badge: String,
    iconColor: String,
    description: String,
  },
  {
    timestamps: true,
  },
);

const Category =
  models["Category"] || model<Category>("Category", categorySchema);
export default Category;
