import passport from 'passport';
import { Strategy } from 'passport-local';
import UserService from '../services/user.service';

const localStrategy = () => {
  passport.use(
    new Strategy(
      {
        passwordField: 'password',
        usernameField: 'email',
      },
      async (email: string, password: string, done) => {
        try {
          const user = await UserService.getByEmail(email);
          if (user) {
            done(null, user);
          } else {
            done(null, false, { message: `User with email address: ${email} does not exist.` });
          }
        } catch (error) {
          done(error, false);
        }
      },
    ),
  );
};

export default localStrategy;
