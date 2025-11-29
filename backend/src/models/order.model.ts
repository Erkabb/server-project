import { models, model, Schema } from "mongoose";

type Order = {
  _id: Schema.Types.ObjectId;
  productId: Schema.Types.ObjectId;
  quantity: number;
  total: number;
  unitPrice: number;
  discount: number;
  leftQuantity: number;
  userAddress: string;
  pickUpLocation: string;
  isCompany: boolean;
  companyName: string;
  companyRegister: string;
  phoneNumber: string;
  status: string;
  shipmentTotal: number;
  declinedAt: Date;
  cancelReason: string;
  completedAt: Date;
  waitUntil: Date;
  availableHours: number;
  pickedStaff: string;
  websiteId: string;
};

// userAddress: string,
//     userPhoneNumber: string,
//     pickUpLocation: string,
//     pickUpDate: string,
//     pickUpTime: string,
//     additionalText: string,
//     shippingAddress: string,
//     shipmentTotal: string,
//     shippingTime: string,
const orderSchema = new Schema<Order>(
  {
    productId: {
      type: String,
      ref: "Product",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
    websiteId: {
      type: String,
      ref: "Website",
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    unitPrice: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
    },
    leftQuantity: {
      type: Number,
      required: true,
    },
    userAddress: {
      type: String,
      required: true,
    },
    pickUpLocation: {
      type: String,
      required: true,
    },
    isCompany: { type: Boolean, default: false },
    companyName: {
      type: String,
      default: null,
      validate: {
        validator: function (value) {
          if (this.isCompany) {
            return value != null && value.trim() !== "";
          }
          return true;
        },
        message: "Company name is required when isCompany is true.",
      },
    },
    companyRegister: {
      type: String,
      default: null,
      validate: {
        validator: function (value) {
          if (this.isCompany) {
            return value != null && value.trim() !== "";
          }
          return true;
        },
        message: "Company register is required when isCompany is true.",
      },
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "completed", "declined"],
      default: "pending",
    },
    shipmentTotal: {
      type: Number,
      default: 0,
    },
    declinedAt: { type: Date, default: null },
    cancelReason: {
      type: String,
      default: null,
    },
    completedAt: { type: Date, default: null },
    availableHours: { type: Number, default: null },
    pickedStaff: { type: String, default: null },
  },
  {
    timestamps: true,
  },
);
orderSchema.pre("save", function (next) {
  if (this.isModified("status")) {
    if (this.status === "completed" && !this.completedAt) {
      this.completedAt = new Date();
    } else if (this.status !== "completed") {
      this.status = "pending";
    }
  }
  next();
});
const Order = models["Order"] || model<Order>("Order", orderSchema);
export default Order;
