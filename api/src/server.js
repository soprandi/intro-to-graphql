import { graphqlHTTP } from 'express-graphql';
import * as config from '../config';
import express from 'express';
import { schema } from '../schema';
import { dbclient } from './db/db-client';
var cors = require('cors')

async function main() {
    const server = express();
    server.use(cors());

    server.use('/',
            graphqlHTTP({
                schema,
              //  rootValue,
                graphiql: true,
                context: { dbclient }
            }));
    server.listen(config.port, () => {
        console.log(`Server URL: http://localhost:${config.port}/`);
        });
}
main();