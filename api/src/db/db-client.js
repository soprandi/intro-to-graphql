import * as config from '../../config';

const pgp = require('pg-promise')();
const db = {}
db.conn = pgp(config.connectionString);

export const dbclient = db; 