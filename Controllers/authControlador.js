const config = require("../Config/authConfig");
const db = require("../models");
const ENCARGADO = db.encargado;
const ROL = db.rol;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { encargado } = require("../models");

exports.signup = (req, res) => {
  const encargado = new ENCARGADO({
    usuario: req.body.username,
    email: req.body.email,
    contraseña: bcrypt.hashSync(req.body.password, 8)
  });

  encargado.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (req.body.roles) {
      ROL.find(
        {
          nombre: { $in: req.body.roles }
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          encargado.roles = roles.map(role => role._id);
          encargado.save(err => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

            res.send({ message: "Encargado registrado con exito" });
          });
        }
      );
    }
  });
};

exports.signin = (req, res) => {
    ENCARGADO.findOne({
    usuario: req.body.username
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!encargado) {
        return res.status(404).send({ message: "Encargado no encontrado" });
      }

      var contraseñaValida = bcrypt.compareSync(
        req.body.password,
        encargado.contraseña
      );

      if (!contraseñaValida) {
        return res.status(401).send({
          accessToken: null,
          message: "Contraseña invalida"
        });
      }

      var token = jwt.sign({ id: encargado.id }, config.contraseña, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];

      for (let i = 0; i < encargado.roles.length; i++) {
        authorities.push("ROLE_" + encargado.roles[i].name.toUpperCase());
      }
      res.status(200).send({
        id: encargado._id,
        usuario: encargado.usuario,
        email: encargado.email,
        roles: authorities,
        accessToken: token
      });
    });
};