import { GraphQLFloat, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

export const PriceType = new GraphQLObjectType({
    name: 'Price',
    description: 'Rappresenta il Prezzo di un libro',
    fields: () => ({
        id: { type: GraphQLNonNull( GraphQLInt)},
        book_id: { type: GraphQLNonNull(GraphQLInt)},
        value: { type: GraphQLNonNull( GraphQLFloat)}
    })
})