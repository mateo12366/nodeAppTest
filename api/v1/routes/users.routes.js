const db = require('../../../models');
const {Router} = require('express'); // Destructuracion

// se crea el router
const router = Router();
const UserController = require('../../../controllers/userController');

router.get('/testUserAPI', (req, res) => {
    res.send({
        "status": 200,
        "message": "Hello from Users"
    });
});

//Rutas del usuario con los verbos HTTP
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;