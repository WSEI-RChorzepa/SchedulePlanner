import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
import morgan from 'morgan';
import chalk from 'chalk';
import config from './_config/config';
import HomeRoutes from './routes/home.routes';

const start = () => {
  const app = express();

  app.use(morgan('dev'));
  app.use(express.static(path.join(__dirname, 'bundles')));
  app.set('views', path.join(__dirname, 'views'));
  app.engine('handlebars', exphbs());
  app.set('view engine', 'handlebars');

  app.use('/', HomeRoutes);

  app.listen(config.port, () => {
    console.log(`server started at http://localhost:${chalk.green(config.port)}`);
  });
};

start();
