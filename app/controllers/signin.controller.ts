import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import validate from '../decorators/validate';
import SignInSchema from '../validator/signin.validator';
import { Controller } from '../types';

class SignInController implements Controller.IController {
  view(req: Request, res: Response) {
    const configuration: Controller.IViewConfiguration = {
      title: 'Sign In',
      layout: 'auth',
      styles: 'signIn',
    };

    res.render('signin', configuration);
  }

  @validate(SignInSchema)
  signin(req: Request, res: Response, next: NextFunction) {
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/signin',
      failureFlash: true,
    })(req, res, next);
  }
}

export default SignInController;
