import fs from 'fs';
import userMethods from '../crud/user';
import {
  Strategy as JwtStrategy,
  ExtractJwt,
  StrategyOptions,
} from 'passport-jwt';
import { PassportStatic } from 'passport';

const keyPath = 'id_rsa_pub.pem';
const PUB_KEY = fs.readFileSync(keyPath, 'utf-8');

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ['RS256'],
};

const strategy = new JwtStrategy(options, (payload, done) => {
  userMethods
    .findUserById(payload.sub)
    .then(user => {
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
    .catch(err => done(err, false));
});

export default function configPassport(passport: PassportStatic) {
  passport.use('user', strategy);
}
