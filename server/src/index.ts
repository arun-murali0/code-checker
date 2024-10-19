import express from 'express';
import { PORT } from './config';
import { DB } from './db';
import Routes from './routes';
import cors from 'cors';
import helmet from 'helmet';
import passport from 'passport';
import session from 'express-session';
import { errorHandler } from './middlewares/ErrorHandler';

const app = express();

// middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	session({
		secret: 'dfsafa',
		resave: false,
		saveUninitialized: false,
		cookie: { maxAge: 60 * 60 * 24, httpOnly: true },
	})
);

// auth provider
passport.initialize();
passport.session();

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

// error handler
app.use(errorHandler);
