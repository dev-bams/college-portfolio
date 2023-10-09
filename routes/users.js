/* -------------------------------------------------------------------------- */
/*                                Documnetation                               */
/* -------------------------------------------------------------------------- */

/* 
   File: users.js
   Student's Name: Khaleed Opeloyeru
   Student ID: 301286462
   Date: 08/10/2023
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
