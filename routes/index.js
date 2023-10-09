/* -------------------------------------------------------------------------- */
/*                                Documnetation                               */
/* -------------------------------------------------------------------------- */

/* 
   File: index.js
   Student's Name: Khaleed Opeloyeru
   Student ID: 301286462
   Date: 08/10/2023
*/

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("../views/partials/home", { title: "Home" });
});

/* GET home page. */
router.get("/home", function (req, res, next) {
  res.render("../views/partials/home", { title: "Home" });
});

/* GET About Us page. */
router.get("/about", function (req, res, next) {
  res.render("../views/partials/about", { title: "About" });
});

/* GET Products page. */
router.get("/products", function (req, res, next) {
  res.render("../views/partials/skills", { title: "Products" });
});

/* GET Services page. */
router.get("/services", function (req, res, next) {
  res.render("../views/partials/services", { title: "Services" });
});

/* GET Contact Us page. */
router.get("/projects", function (req, res, next) {
  res.render("../views/partials/portfolio", { title: "Projects" });
});

router.get("/contact", function (req, res, next) {
  res.render("../views/partials/contact", { title: "Contact" });
});

module.exports = router;
