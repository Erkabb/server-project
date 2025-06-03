// import {MutationResolvers} from "@/generated/graphql";
// import User from "@/models/auth.model";
// import Product from "@/models/product.model";
//
// export const createOrder: MutationResolvers['createOrder'] = async(_, {input}, {userId})=> {
//     const {productId} = input;
//     const user = await User.findById(userId);
//     if (!user) throw new Error('Must logged in');
//     const findProduct= await Product.findById(productId);
//
//     // const hadProdInCart = await Cart
//
// }