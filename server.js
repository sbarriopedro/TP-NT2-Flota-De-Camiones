const db = require("./models");
const Rol = db.rol;

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./Config/dbConfig");


const app = express();

require('./Routes/rutasEncargado')(app);
require('./Routes/authRoute')(app);


var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a la app" });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Conectado con exito a MongoDB");
    initial();
  })
  .catch(err => {
    console.error("Error de conexion", err);
    process.exit();
  });

function initial() {
  Rol.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Rol({
        nombre: "encargado"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("agregado 'encargado' a la lista de roles");
      });

      new Rol({
        name: "chofer"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("agregado 'chofer' a la lista de roles");
      });
    }
  });
}