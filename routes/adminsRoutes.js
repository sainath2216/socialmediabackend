const vendorController = require('../controllers/adminsController');
const express = require('express');

const router = express.Router();

router.post('/register', vendorController.adminsRegister);
router.post('/login', vendorController.adminsLogin);

router.get('/all-admins', vendorController.getAllAdmins);  
router.get('/single-admin/:id', vendorController.getAdminsById);

module.exports = router;

