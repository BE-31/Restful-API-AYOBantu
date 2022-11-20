const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article.controller.js');
const auth = require('../middlewares/auth.js');

router.get('/', auth(), articleController.getAllArticle);

router.get('/:id', auth(), articleController.getArticleById);

router.post('/', auth('create'), articleController.createArticle);

router.put('/:id', auth('update'), articleController.updateArticleById);

router.delete('/:id', auth('delete'), articleController.deleteArticleById);

router.delete('/', auth('deleteAll'), articleController.deleteAllArticle);


module.exports = router;