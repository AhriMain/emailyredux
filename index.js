const express = require("express");
const app = express();
const cookieSession = require("cookie-session");
const passport = require("passport");
const { connect } = require("mongoose");
const router = require("./routes/authRoutes");
const { cookieKey, mongoURI } = require("./config/keys");
// clientid
// clientsecrect
// tell app to use cookies
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/", router);
const PORT = process.env.PORT || 5000;
connect(mongoURI).then(() => app.listen(PORT, () => console.log("connected")));
