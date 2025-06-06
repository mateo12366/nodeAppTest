const db = require('../models');

const getAllCategories = async () => {
    try {
        let Categories = await db.Category.findAll();
        return Categories;
    } catch (error) {
        return error.message || "Failed to get Categories";
    }
};

const getCategory = async (id) => {
    try {
        let Category = await db.Category.findByPk(id);
        return Category
    } catch (error) {
        throw { status: 500, message: error.message || "Failed to get Category" };
    }
};

const createCategory = async (name) => {
    try {
        let newCategory = await db.Category.create({
            name
        });
        return newCategory;
    } catch (error) {
        return error.message || "Failed to create Category";
    }
};

const updateCategory = async (id, name) => {
    try {
        let updatedCategory = await db.Category.update({
            name
        }, {
            where: { id }
        });
        return updatedCategory;
    } catch (error) {
        return error.message || "Failed to update Category";
    }
};

const deleteCategory = async (id) => {
    try {
        let deletedCategory = await db.Category.destroy({
            where: { id }
        });
        return deletedCategory;
    } catch (error) {
        return error.message || "Failed to delete Category";
    }
};

module.exports = {
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
};