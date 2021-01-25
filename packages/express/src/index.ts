import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
//@ts-ignore
import session from 'express-session';
//@ts-ignore
import connectPg from 'connect-pg-simple';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PostgresConnect = connectPg(session);

app.use(bodyParser.json());
app.use(helmet());
app.use(
  session({
    // store: new PostgresConnect(session),
    secret: process.env.APP_AUTH_SECRET,
    resave: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000, secure: true },
  })
);

const port = process.env.APP_PORT;
app.listen(port, () => {
  console.log(`App running on ${port}`);
});
