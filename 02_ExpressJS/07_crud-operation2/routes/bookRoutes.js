const express = require('express');

const bookController = require('../controllers/bookControllers');

const router = express.Router();

router.get('/', bookController.readBook); // on /book bookController ka getBook logic chalega 
router.post('/books', bookController.createdBook); 
router.put('/books/:id', bookController.updateBook);  
router.delete('/books/:id', bookController.deleteBook); 


module.exports = router;