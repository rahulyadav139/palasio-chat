import configPassport from '../config/passport';

import passport from 'passport';

export default function initializePassport() {
  configPassport(passport);

  return passport.initialize;
}
