const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/siteController');

router.get('/contact', siteController.contact);
router.get('/', siteController.index);

module.exports = router;
