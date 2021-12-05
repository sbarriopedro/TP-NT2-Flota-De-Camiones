const mongoose = require("mongoose");

const Encargado = mongoose.model(
  "Encargado",
  new mongoose.Schema({
    usuario: String,
    email: String,
    contraseña: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = Encargado;