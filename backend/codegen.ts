import {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: './src/schemas',
    generates: {
        'src/generated/graphql.ts': {
            plugins: ['typescript', 'typescript-resolvers'],
            config: {
                contextType: '../types#Context',
                makeResolverTypeCallable: true,
                maybeValue: 'T',
                add: '/* eslint-disable @typescript-eslint/no-explicit-any */'
            },
        },
    },
};

export default config;
