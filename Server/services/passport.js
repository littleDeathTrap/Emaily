const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  console.log("SERIALIZING USER:", user);

  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log("DESERIALIZING USER ID:", id);
  User.findById(id).then((user) => {
    console.log("DESERIALIZED USER:", user);
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("GOOGLE PROFILE:", profile);
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        //we already have a record with the given profile ID
        return done(null, existingUser);
      }
      //we don't have a user record with this ID, make a new record
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
