import path from 'path';
import express, { Express } from 'express';
import exphbs from 'express-handlebars';
import config from '../config';

const hbs = exphbs.create({
  helpers: {
    toJSON: function (value: any) {
      console.log(value);
      return JSON.stringify(value, null, 2);
    },
  },
});

const handlebarsMiddleware = (app: Express) => {
  app.use(express.static(path.join(config.root, 'bundles')));
  app.set('views', path.join(config.root, 'views'));
  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');
};

export default handlebarsMiddleware;
