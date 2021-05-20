import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import { BookType } from '../model/book';
const books = require('../data/books.json')

const QueryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        cheGiornoE: {
            type: GraphQLString,
            resolve: () => {
                const isoString = new Date().toISOString();
    	        return `Ciao oggi è il ${isoString.slice(0, 10)}`;
            }
        },
        bookList: {
            type: new GraphQLList( BookType ),
            description: 'API che restituisce i libri nel file statico json',
            resolve: ()=> {
                return books;
            }
        },
         booksList2: {
            type: new GraphQLList(BookType),
            description: ".....",
            resolve: (source, args, { dbclient }) => {
                const query = `SELECT * FROM example.book`;
                return dbclient.conn.many(query)
                   .then(data => { return data; })
                   .catch(err => { return 'The error is', err; });
            }
        }

    }
})

export const schema = new GraphQLSchema({
    query: QueryType
});