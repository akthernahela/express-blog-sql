const express = require('express');
const router = express.Router();
const prodController = require('../controllers/prodController');


//index
router.get('/', prodController.index);

//show
router.get('/:id', prodController.show);

//store
router.post('/', prodController.store);

//update
router.put('/:id', prodController.put);

//modify
router.patch('/:id', prodController.patch);

//destroy
router.delete('/:id', prodController.destroy);

module.exports = router;