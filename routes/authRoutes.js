const { Router } = require("express");
const router = new Router();
const passport = require("passport");
require("../services/passport");
router.get("/", (req, res) => {
  res.send({ message: "homepage" });
});
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/auth/google" }),
  (req, res) => {
    res.send("redirected");
  }
);
router.get("/api/logout", (req, res) => {
  req.logout(); //logout from passport.deletes cookies so no access.
  res.send(req.user);
});
router.get("/api/current_user", (req, res) => {
  console.log("req.user:", req.user);
  if (req.user) {
    res.json(req.user);
  } else {
    res.json({ message: "not authorized" });
  }
});
module.exports = router;
