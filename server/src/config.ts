import dotEnv from 'dotenv';
dotEnv.config();

const PORT = process.env.PORT || 3000;
const DB_STRING=process.env.DATABASE_STRING

export { PORT,DB_STRING };
