const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../Model/User');

// Google Strategy 

passport.use(new GoogleStrategy({
        clientID : process.env.Google_Client_ID,
        clientSecret : process.env.Google_Client_Secret,
        callbackURL : "http://localhost:8080/auth/google/callback"
    },
    async(accessToken, refreshToken, profile, done) => {
        try{
            let user = await User.findOne({googleId : profile.id});
            if(user){
                return done(null,user);
            }

            user = await User.findOne({ email: profile.emails[0].value})
            if(user){
                user.googleId = profile.id
                await user.save()
                return done(null,user)
            }

            const newUser = await User.create({
                username : profile.displayName.split(' ').join('').toLowerCase() + Math.floor(Math.random()*1000),
                email : profile.emails[0].value,
                googleId : profile.id,
                authMethod : 'google',
            });

            done(null, newUser);
        } catch (error) {
            done(error, null);
        } 
    }

));



passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});