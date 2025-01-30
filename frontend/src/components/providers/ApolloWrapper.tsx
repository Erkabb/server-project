'use client';
import { HttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, InMemoryCache } from '@apollo/experimental-nextjs-app-support';
import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support';
import { PropsWithChildren } from 'react';

const uri=process.env.BACKEND_URI ?? 'http://localhost:3000/api/graphql';

const makeClient=()=>{
    const httpLink=new HttpLink({ uri, fetchOptions: {mode: "cors",}});

    const authLink = setContext((_, { headers }) => {
        const token = localStorage.getItem('token');
        return {
          headers: {
            ...headers,
            authorization: token ?? '',
          },
        };
      });
      return new ApolloClient({
        cache: new InMemoryCache(),
        link: authLink.concat(httpLink),
      });
};
export const ApolloWrapper = ({ children }: PropsWithChildren) => {
    return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
  };