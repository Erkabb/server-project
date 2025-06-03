import {mergeTypeDefs} from '@graphql-tools/merge';
import {typeDefs as AuthTypeDefs} from './auth.schema';
import {typeDefs as ProductTypeDefs} from './product.schema';
import {typeDefs as CategoryTypeDefs} from './category.schema';
import {typeDefs as OrderTypeDefs} from "@/schemas/order.schema";
import {companyTypeDef} from "@/schemas/company.schema";
import {MutationAndQueriesTypeDefs} from "@/schemas/mutation.schema";
import {brandTypeDef} from "@/schemas/brands.schema";
import {storeTypeDefs} from "@/schemas/stores.schema";

export const typeDefs = mergeTypeDefs([AuthTypeDefs, ProductTypeDefs, CategoryTypeDefs, OrderTypeDefs, companyTypeDef, MutationAndQueriesTypeDefs, brandTypeDef, storeTypeDefs]);