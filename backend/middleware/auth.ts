import passport from 'passport';

export const userAuthenticator = () => [
  passport.authenticate('user', { session: false }),
];

export default { userAuthenticator };
