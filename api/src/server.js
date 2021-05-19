import { graphql } from 'graphql';
import { schema, rootValue } from '../schema'

const executeGraphQLRequest = async request => {
const resp = await graphql(schema, request, rootValue);
console.log(resp.data);
};

executeGraphQLRequest(process.argv[2]);