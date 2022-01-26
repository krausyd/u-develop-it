const express = require('express');
const router = express.Router();

router.use(require('./candidates'));
router.use(require('./parties'));
router.use(require('./voters'));

module.exports = router;