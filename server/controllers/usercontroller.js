const router = require("express").Router();
const User = require("../db").import("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


router.post("/create", function (req, res) {
    User.create({
      username: req.body.user.username,
      password: bcrypt.hashSync(req.body.user.password, 13),
    })
      .then(function createSuccess(user) {
        let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
          expiresIn: 60 * 60 * 24,
        });
        res.status(200).json({
          user: user,
          message: "User succesfully created",
          sessionToken: token,
        });
      })
      .catch((err) => res.status(500).json({ error: err }));
  });



router.post("/login", function (req, res) {
  User.findOne({
    where: { username: req.body.user.username },
  }).then(
    function (user) {
      if (user) {
        bcrypt.compare(
          req.body.user.password,
          user.password,
          function (err, matches) {
            if (matches) {
              var token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                expiresIn: 60 * 60 * 24,
              });
              res.json({
                user: user,
                message: "successfully authenticated",
                sessionToken: token,
              });
            } else {
              res.status(502).send({ error: "You failed to match" });
            }
          }
        );
      } else {
        res.status(500).send({ error: "failed to authenticate user" });
      }
    },
    function (err) {
      res.status(501).send({ error: "you failed to authenticate" });
    }
  );
});

module.exports = router;
