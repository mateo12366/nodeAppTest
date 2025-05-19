const { where } = require('sequelize');
const db = require('../models')

const getAllUsers = async () => {
    try {
        const users = await  db.User.findAll();
        return users;
    } catch (error){
        throw new Error("Error al traer los usuarios" + error.message);
    }
    
}

const getUserById = async (id) => {
    try {
        const users = await  db.User.findByPk(id);
        return users;
    } catch (error){
        throw new Error("Error al traer el usuario" + error.message);
    }
    
}

const createUser = async (name, email, password) => {
    try {
        const users = await  db.User.create({name, email, password});
        return users;
    } catch (error){
        throw new Error("Error al crear usuario" + error.message);
    }
    
}
const updateUser = async (id, name, email, password) => {
    try {
        const users = await  db.User.update({name, email, password}, { where: { id } });
        return users;
    } catch (error){
        throw new Error("Error al actualizar usuario" + error.message);
    }
}

const deleteUser = async (id) => {
    try {
        const users = await  db.User.destroy({where: { id } });
        return users;
    } catch (error){
        throw new Error("Error al eliminar usuario" + error.message);
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};