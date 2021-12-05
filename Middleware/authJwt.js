const jwt = require("jsonwebtoken");
const config = require("../config/authConfig.js");
const db = require("../models");
const ENCARGADO = db.encargado;
const ROL = db.rol;

verificarToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No se obtuvo un token" });
  }

  jwt.verify(token, config.contraseña, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Ingreso no autorizado" });
    }
    req.userId = decoded.id;
    next();
  });
};

isEncargado = (req, res, next) => {
    ENCARGADO.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    ROL.find(
      {
        _id: { $in: encargado.roles }
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "encargado") {
            next();
            return;
          }
        }

        res.status(403).send({ message: "Requiere acceso de encargado" });
        return;
      }
    );
  });
};

const authJwt = {
    verificarToken,
    isEncargado,
};
module.exports = authJwt;