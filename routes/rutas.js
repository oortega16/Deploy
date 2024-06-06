const express = require("express");
const router = express.Router();
const cuadrado = require("../calculos");

//calculos
router.get('/calculos/:width', (req, res) => {
    const { width } = req.params;
    let a = cuadrado.area(width);
    let b = cuadrado.perimetro(width);
    console.log(width, a, b);
    res.send({
        ancho: width,
        area: a,
        perimetro: b
    });
});

// Api 1
router.get('/datos', (req, res) => {
    res.send({
        "baseSecreta": "Torre Oculta",
        "activo": false,
        "miembros": [
            {
                "nombre": "Judith",
                "edad": 34,
                "identidadSecreta": "El Halcón",
                "poderes": [
                    "Vuelo",
                    "Visión nocturna",
                    "Garras afiladas"
                ]
            },
            {
                "nombre": "Señora Misterio",
                "edad": 27,
                "identidadSecreta": "Angela Ruiz",
                "poderes": [
                    "Invisibilidad",
                    "Campos de fuerza",
                    "Agilidad sobrehumana"
                ]
            },
            {
                "nombre": "Llama Eterna",
                "edad": 500000,
                "identidadSecreta": "Desconocido",
                "poderes": [
                    "Pirokinesis",
                    "Vuelo",
                    "Control mental"
                ]
            }
        ]
    });
});

// Api 2
router.post("/ayuda", (req, res) => {
    console.log("Cuerpo de la petición: ", req.body);
    res.send({
        mensaje: "Saludos terrícola, ¿cómo puedo asistirte hoy? SOY UNA PETICIÓN POST"
    });
});

// Api 3
router.post("/producto", (req, res) => {
    console.log("Cuerpo de la petición: ", req.body);
    const { nombre, precio, categoria } = req.body;
    console.log(nombre);
    console.log(precio);
    console.log(categoria);
    res.send({ mensaje: "El artículo ha sido registrado con éxito" });
});

// Api 4
router.post('/producto/:id', (req, res) => {
    const { id } = req.params;
    const { modelo } = req.query;
    const { costo } = req.body;
    console.log(id, modelo, costo);
    res.json({
        minimoEnStock: 5,
        maximoEnStock: 20,
        enExistencia: 12
    });
});


/*router.get('/', (req,res) => {
    res.send({message:"hola mundo soy Judith Yahaira Ortega Ortega"});
   });*/

   router.get('/', function(req, res){
    res.sendFile(process.cwd() + '/public/index.html');
   });
   
   router.get('/ayuda', (req,res) => {
    res.send({message:"En que te ayudo soy Judith Yahaira Ortega Ortega  "});
   });
   
   router.get('/ayuda/:name', (req,res) => {
    res.send({message:`Hola ${req.params.name} en que te ayudo`});
   });

   router.get('/prueba', (req,res) => {
    res.send({message:`Hola ${req.query.name} ${req.query.apellido}`});
   });

   module.exports = router;