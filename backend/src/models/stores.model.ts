import {model, models, Schema} from "mongoose";

type Stores = {
    _id: Schema.Types.ObjectId;
    name: string;
    logo: string;
    short_name: string;
    storeLocation: string;
    phone: string;
    address: string;
    timesheets: string[];
    totalProducts: number;
};

const storeSchema = new Schema<Stores>({
    name: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
    },
    short_name: String,
    storeLocation: String,
    phone: String,
    address: String,
    timesheets: [
        {
            type: String,
        }
    ],
    totalProducts: Number,
});

const Stores= models['Stores'] || model('Stores', storeSchema);

export default Stores;