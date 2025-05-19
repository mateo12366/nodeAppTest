//Enlazamos el segvicio (capa) de usuarios
const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
    const allUsers = await userservice.getAllUsers();
    if (allUsers) {
        res.status(200).send({ status: "Ok", data: allUsers}); 
    } else {
        res.status(400).send({ status: "Failed", data: null}); 
    }
}

const getUserById = async (req, res) => {

    const id =  req.params.id;
    const user = await userService.getUserById(id);

    if (user) {
        res.status(200).send({ status: "Ok", data: user});
    } else {
        res.status(400).send({ status: "Failed", data: null});
    }
}

const createUser = async (req, res) => {

    const {name, email, password}=  req.body;
    const createUser = await userService.createUser(name, email, password);

    if (createUser) {
        res.status(200).send({ status: "Ok", data: createUser});
    } else {
        res.status(400).send({ status: "Failed", data: null});
    }
}

const updateUser = async (req, res) => {

    const id = req.params.id;

    const {name, email, password}=  req.body;
    const updateUser = await userService.updateUser(id, name, email, password);

    if (updateUser) {
        res.status(200).send({ status: "Ok", data: updateUser});
    } else {
        res.status(400).send({ status: "Failed", data: null});
    }
}

const deleteUser = async (req, res) => {

    const id = req.params.id;
    const deleteUser = await userService.deleteUser(id);

    if (deleteUser) {
        res.status(200).send({ status: "Ok", data: deleteUser});
    } else {
        res.status(400).send({ status: "Failed", data: null});
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};