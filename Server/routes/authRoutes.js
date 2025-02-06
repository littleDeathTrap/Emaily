const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      console.log("SESSION AFTER LOGIN:", req.session);
      res.redirect("/surveys");
    }
  );

  app.get("/api/logout", (req, res) => {
    // res.set(
    //   "Cache-Control",
    //   "no-store, no-cache, must-revalidate, proxy-revalidate"
    // );
    // res.set("Pragma", "no-cache");
    // res.set("Expires", "0");

    req.logout();
    console.log(req);
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    console.log("CURRENT USER:", req.user);
    console.log("SESSION:", req.session);
    res.send(req.user);
  });
};
