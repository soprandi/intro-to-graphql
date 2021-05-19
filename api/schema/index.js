import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';


const QueryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        cheGiornoE: {
            type: GraphQLString,
            resolve: () => {
                const isoString = new Date().toISOString();
    	        return `Ciao oggi è il ${isoString.slice(0, 10)}`;
            }
        }
    }
})

export const schema = new GraphQLSchema({
    query: QueryType
});