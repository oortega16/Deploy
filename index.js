const express = require("express"); //importar express
const bodyParser = require("body-parser");
const cors = require("cors");
const misrutas = require('./routes/rutas');

const app = express(); //crear al servidor
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());
app.use('/',misrutas);

app.use(express.static(process.cwd() + '/public'));

app.listen(port, () => {
 console.log(`hola servidor ejecucion en http://localhost:${port}`);
})

// Api 1
app.get('/datos', (req, res) => {
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
app.post("/ayuda", (req, res) => {
    console.log("Cuerpo de la petición: ", req.body);
    res.send({
        mensaje: "Saludos terrícola, ¿cómo puedo asistirte hoy? SOY UNA PETICIÓN POST"
    });
});

// Api 3
app.post("/producto", (req, res) => {
    console.log("Cuerpo de la petición: ", req.body);
    const { nombre, precio, categoria } = req.body;
    console.log(nombre);
    console.log(precio);
    console.log(categoria);
    res.send({ mensaje: "El artículo ha sido registrado con éxito" });
});

// Api 4
app.post('/producto/:id', (req, res) => {
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



app.get('/', (req,res) => {
    res.send({message:"hola mundo soy Judith Yahaira Ortega Ortega"});
   });

   app.get('/ayuda', (req,res) => {
    res.send({message:"En que te ayudo soy Judith Yahaira Ortega Ortega  "});
   });
   
   app.get('/ayuda/:name', (req,res) => {
    res.send({message:`Hola ${req.params.name} en que te ayudo`});
   });

   app.get('/prueba', (req,res) => {
    res.send({message:`Hola ${req.query.name} ${req.query.apellido}`});
   });
