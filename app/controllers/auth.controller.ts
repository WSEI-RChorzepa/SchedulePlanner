import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import validate from '../decorators/validate';
import SignInSchema from '../validator/signin.validator';
import SignUpSchema from '../validator/signup.validator';

class AuthController {
  index(req: Request, res: Response) {
    res.render('signin', {
      title: 'Sign in',
      layout: 'auth',
      styles: 'signin',
    });
  }

  @validate(SignInSchema)
  signIn(req: Request, res: Response, next: NextFunction) {
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/auth',
      failureFlash: true,
    })(req, res, next);
  }

  signupPage(req: Request, res: Response) {
    res.render('signup', {
      title: 'Sign up',
      layout: 'auth',
      styles: 'signup',
    });
  }

  @validate(SignUpSchema, '/auth/signup')
  signup(req: Request, res: Response) {
    console.log('signup ?');
    res.redirect('/signin');
  }
}

export default AuthController;
