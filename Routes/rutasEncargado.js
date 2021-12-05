const { authJwt } = require("../Middleware");
const controller = require("../Controllers/controladoresUsuario");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/encargado", [authJwt.verificarToken, authJwt.isEncargado], controller.encargadoAccess);
};