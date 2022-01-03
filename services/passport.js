const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/users");
const { googleClientID, googleClientSecret } = require("../config/keys");
passport.serializeUser((user, done) => {
  console.log("serialized");
  done(null, user.id); //done 1st args is an error object if any or null.
});
passport.deserializeUser(async (id, done) => {
  console.log("deserialized");
  console.log(id);
  const user = await User.findById(id);

  done(null, user);
});
passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (!existingUser) {
        const user = await User.create({ googleId: profile.id });
        done(null, user);
      } else {
        console.log("done");
        done(null, existingUser);
      }
    }
  )
);
