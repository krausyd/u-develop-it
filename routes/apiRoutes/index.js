const express = require('express');
const router = express.Router();

router.use(require('./candidates'));
router.use(require('./parties'));

module.exports = router;