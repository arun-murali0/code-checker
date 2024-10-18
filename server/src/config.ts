import dotEnv from 'dotenv';
dotEnv.config();

const PORT = process.env.PORT || 3000;

export { PORT };
