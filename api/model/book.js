import { GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { PriceType } from "./price";
import  * as queries from '../src/db/query';

export const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'Rappresenta un Libro',
    fields: () => ({
        id: { type: GraphQLNonNull( GraphQLInt)},
        title: { type: GraphQLNonNull(GraphQLString)},
        author: { type: GraphQLNonNull( GraphQLString)},
        price: {
            type: new GraphQLNonNull( PriceType ),
            resolve: (soruce, args, { dbclient }) => {
                return dbclient.conn.many(queries.priceFromBookId, [source.id])
                    .then(data => { return data[0];})
                    .catch(err =>  { return 'errore', err})
            }
        }
    })
})