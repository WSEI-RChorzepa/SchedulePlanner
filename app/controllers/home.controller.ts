import 'reflect-metadata';
import { Request, Response, NextFunction } from 'express';
import auth from '../decorators/auth';

class HomeController {
  @auth()
  index(req: Request, res: Response, next: NextFunction) {
    res.render('home', {
      active: {
        home: true,
        about: false,
        contact: false,
      },
    });
  }

  @auth()
  about(req: Request, res: Response, next: NextFunction) {
    res.render('about', {
      active: {
        home: false,
        about: true,
        contact: false,
      },
    });
  }

  @auth()
  contact(req: Request, res: Response, next: NextFunction) {
    res.render('contact', {
      active: {
        home: false,
        about: false,
        contact: true,
      },
    });
  }
}

export default HomeController;
