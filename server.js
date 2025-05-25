//Llamado e inicializacion d dependenccias
const express = require('express'); // se incluye el franwork express
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express(); //instancia de Express

//configuraciones
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routes
// app.use('/api/users', require('./api/users')); //se incluye el router de usuarios

//Configuracionn de rutas del API
// app.get('/', (req, res)=>{
//     res.send({
//         status : 200,
//         message : 'Hello API - NodeJs'
//     });
// });

// app.get('/saludo', (req, res)=>{
//     res.send({
//         status : 200,
//         message : 'Hola Bienvenido a la API de Node.js S '
//     });
// });

// app.post('/testNewUser', (req, res) => {
//     console.log(req.body);

//     // const nombre = req.body.nombre;
//     // const email = req.body.email;
//     // const direccion = req.body.direccion;
//     // const empresa = req.body.empresa;

//     const{nombre, email, direccion, empresa} = req.body;

//     console.log(`Nombre: ${nombre}`);
//     console.log(`Email: ${email}`);
//     console.log(`Direccion: ${direccion}`);
//     console.log(`Empresa: ${empresa}`);

//     res.send({
//         status: 201,
//         message: 'Usuario creado exitosamente!'
//     })
// });

app.use('/api/v1/users', require('./api/v1/routes/users.routes'));
app.use('/api/v1/articles', require('./api/v1/routes/articles.routes')); // Ruta para atucilos con la v1 de la API
app.use('/api/v1/categories', require('./api/v1/routes/categories.routes'));

//Se incia el servidor en el puesto 4000
app.listen(app.get('port'),()=>{
    console.log(`server running on port ${app.get('port')}  😜😉`);
});