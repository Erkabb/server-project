import { mergeTypeDefs } from '@graphql-tools/merge';
import {typeDefs as AuthTypeDefs} from './auth.schema';
export const typeDefs=mergeTypeDefs([AuthTypeDefs]);