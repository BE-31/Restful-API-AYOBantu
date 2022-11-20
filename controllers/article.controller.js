const { default: mongoose } = require('mongoose');
const Article = require('../models/article');

const getAllArticle = async (req,res) => {
    const article = await Article.find();
    if (article.length != 0) {
        res.status(200).json({
            message : "Success get all articles",
            data: article
        })
    }
    else {
        res.status(404).json({
            message : "Article not found"
        })
    }
}

const getArticleById = async (req,res) => {
    const valid = mongoose.Types.ObjectId.isValid(req.params.id);
    if (valid) {
        const article = await Article.findById(req.params.id);
        if (article) {
            res.status(200).json({
                message : "Success get article by id",
                data: article
            })
        }
        else {
            res.status(404).json({
                message : "Article not found"
            })
        }
    }
    else {
        res.status(400).json({
            message : "Invalid id"
        })
    }
}

const createArticle = async (req,res) => {
    const article = new Article(req.body);
    try {
        await article.save();
        res.status(201).json({
            message : "Success create article",
            data: article
        })
    }
    catch (err) {
        res.status(400).json({
            message : err.message
        })
    }
}

const updateArticleById = async (req,res) => {
    const article = await Article.findById(req.params.id);
    if (article) {
        try {
            Object.assign(article, req.body);
            await article.save();
            res.status(200).json({
                message : "Success update article",
                data: article
            })
        } catch (error) {
            res.status(400).json({
                message : error.message
            })
        }
    }
    else {
        res.status(404).json({
            message : "Article not found"
        })
    }
}

const deleteArticleById = async (req,res) => {
    const article = await Article.findById(req.params.id);
    if (article) {
        try {
            await article.remove();
            res.status(200).json({
                message : "Success delete article",
                data: article
            })
        } catch (error) {
            res.status(400).json({
                message : error.message
            })
        }
    }
    else {
        res.status(404).json({
            message : "Article not found"
        })
    }
}

const deleteAllArticle = async (req,res) => {
    const article = await Article.find();
    if (article.length != 0) {
        try {
            await Article.deleteMany();
            res.status(200).json({
                message : "Success delete all article",
                data: article
            })
        } catch (error) {
            res.status(400).json({
                message : error.message
            })
        }
    }
    else {
        res.status(404).json({
            message : "Article not found"
        })
    }
}

module.exports = {
    getAllArticle,
    getArticleById,
    createArticle,
    updateArticleById,
    deleteArticleById,
    deleteAllArticle
}