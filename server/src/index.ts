import express from 'express';
import { PORT } from './config';
import { DB } from './db';
import Routes from './routes';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

// middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route
app.use('/', Routes);

// database
DB()
	.then(() => {
		app.listen(PORT, () => {
			console.log(`server running in http://localhost:${PORT}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});
