import { mergeTypeDefs } from '@graphql-tools/merge';
import {typeDefs as AuthTypeDefs} from './auth.schema';
import {typeDefs as ProductTypeDefs} from './product.schema';
import {typeDefs as CategoryTypeDefs} from './category.schema';
export const typeDefs=mergeTypeDefs([AuthTypeDefs, ProductTypeDefs, CategoryTypeDefs]);