const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.encargado = require("./encargadoModelo");
db.rol = require("./modeloRol");

db.ROLES = ["encargado", "chofer"];

module.exports = db;