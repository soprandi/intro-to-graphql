import { GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

export const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'Rappresenta un Libro',
    fields: () => ({
        id: { type: GraphQLNonNull( GraphQLInt)},
        title: { type: GraphQLNonNull(GraphQLString)},
        author: { type: GraphQLNonNull( GraphQLString)}
    })
})