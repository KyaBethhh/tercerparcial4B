//este codigo es un servidor de node.js que utiliza la libreria Express. Expres es un fragmento de aplicacion web para node.js que proporciona una serie  de funciones visibl;ers para crear aplicaciones web y api
// En este codigo, se hacen varias cosas:
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

// se importa la libreria Express y se crea una aplicacion de Express llamada "app".
// se importa el modulo "path" de Node.js y se crea una instancia de la clase router de express
// se habilitan los middleweares de express para el manejo de datos JSON y datos codificados en el cuerpo de las solicitudes.
// se crean varias rutas utilizando el metodo "get" del router. cada ruta tiene una direccion URL diferente y envia un archivo HTML diferente al cliente cuando se accede a esa direccion 
// se crea una ruta que utiliza el metodo "post" del router. esta ruta recibe una solicitud POST y envia un mensaje de respuesta al cliente con los atos del cuerpo de la solicitud 
// se asigna el router a la aplicacio de express y se especifica que la aplicacion escuchara en el puerto 8080 (o en el puerto especificao en la variable de entorno "port").
// se imprime un mensaje en la consola para indicar que el servidor esta activo en el puerto 88080.

app.use(express.json());
app.use(express.urlencoded({extended: true}));

router.get("/", (req, res)=>{
   res.sendFile(path.join(_dirname + '/index.html'))
});
router.get("/contacto", (req, res)=>{
	res.sendFile(path.join(_dirname + '/template/contacto.html'))
});
router.get("/perfil", (req, res)=>{
	res.sendFile(path.join(_dirname + '/template/perfil.html'))
});
router.post("/", (req, res)=>{
	res.send("El usuario" + req.body.first_name + "ha sido registrado.");
})
app.use("/". router);
app.listen(process.env.port || 8080 );

console.log("Activo en el puerto 8080");






