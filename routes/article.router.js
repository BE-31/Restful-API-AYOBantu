const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article.controller.js');

router.get('/', articleController.getAllArticle);

router.get('/:id', articleController.getArticleById);

router.post('/', articleController.createArticle);

router.put('/:id', articleController.updateArticleById);

router.delete('/:id', articleController.deleteArticleById);

router.delete('/', articleController.deleteAllArticle);


module.exports = router;