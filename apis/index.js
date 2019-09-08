const express = require('express');
const router = express.Router();

router.get('/admin', (req, res) => {
	res.json({code: 200, data: 'admin', msg: 'ok'})
})

module.exports = router;