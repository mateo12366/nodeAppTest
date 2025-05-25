//creamos el router para poder usar los verbos HTTP
const {Router} = require('express'); //Destructuracion
//Incluimos nuestro controlador de usuarios
const categoryController = require('../../../controllers/categoryController'); //se importa el controlador de usuarios
const router = Router(); //se crea el router

router.get("/", categoryController.getAllCategories); //se crea la ruta para obtener todos los articulos
router.get("/:categoryId", categoryController.getCategory);
router.post("/", categoryController.createCategory); //se crea la ruta para crear un articulo
router.put("/:categoryId", categoryController.updateCategory); //se crea la ruta para actualizar un articulo
router.delete("/:categoryId", categoryController.deleteCategory);

module.exports = router;