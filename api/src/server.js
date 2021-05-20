import { graphqlHTTP } from 'express-graphql';
import * as config from '../config';
import express from 'express';
import { schema } from '../schema';
import { dbclient } from './db/db-client';

async function main() {
    const server = express();
    server.use('/',
            graphqlHTTP({
                schema,
                graphiql: true,
                context: { dbclient }
              
            }));
    server.listen(config.port, () => {
        console.log(`Server URL: http://localhost:${config.port}/`);
        });
}
main();