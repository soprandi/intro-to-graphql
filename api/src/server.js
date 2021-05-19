import { graphqlHTTP } from 'express-graphql';
import * as config from '../config';
import express from 'express';
import { schema } from '../schema';

async function main() {
    const server = express();
    server.use('/',
            graphqlHTTP({
                schema,
              //  rootValue,
                graphiql: true,
            }));
    server.listen(config.port, () => {
        console.log(`Server URL: http://localhost:${config.port}/`);
        });
}
main();