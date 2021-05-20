import dotenv from 'dotenv';

dotenv.config();
export const port = process.env.PORT;
export const connectionString = process.env.CONNECTION_STRING;