const db = require("../models");
const ROLES = db.ROLES;
const ENCARGADO = db.encargado;

chequearDuplicados = (req, res, next) => {
  // Usuario
  ENCARGADO.findOne({
    usuario: req.body.usuario
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (ENCARGADO) {
      res.status(400).send({ message: "Nombre de usuario invalido. Nombre de usuario ya existente" });
      return;
    }

    // Email
    ENCARGADO.findOne({
      email: req.body.email
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (ENCARGADO) {
        res.status(400).send({ message: "Email de usuario invalido. Email de usuario ya existente" });
        return;
      }

      next();
    });
  });
};

chequearRoles = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `El rol ${req.body.roles[i]} no existe`
        });
        return;
      }
    }
  }

  next();
};

const verificarRegistro = {
    chequearDuplicados,
    chequearRoles
};

module.exports = verificarRegistro;