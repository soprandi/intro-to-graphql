import { buildSchema } from 'graphql';

export const schema = buildSchema(`
    type Query {
    	""" Se gli chiedi che giorno è te lo dice..."""
       cheGiornoE: String!
    }
`);

export const rootValue = {
    cheGiornoE: () => {
    	const isoString = new Date().toISOString();
    	return `Ciao oggi è il ${isoString.slice(0, 10)}`;
    },
};
