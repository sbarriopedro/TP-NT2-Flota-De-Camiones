const { verificarRegistro } = require("../Middleware");
const controller = require("../Controllers/authControlador");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verificarRegistro.chequearDuplicados,
      verificarRegistro.chequearRoles
    ],
    controller.signup
  );

  app.post("/api/auth/registro", controller.signin);
};