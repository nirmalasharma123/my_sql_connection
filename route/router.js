
const express = require('express');
const router = express.Router();
const bookController = require('../controller/books');

router.get("/getStudent", bookController.getStudent);
router.post("/creatStudent",bookController.createStudent)

module.exports = router;
