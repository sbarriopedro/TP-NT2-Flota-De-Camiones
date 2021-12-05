exports.allAccess = (req, res) => {
    res.status(200).send("Contenido publico");
  };
  
  exports.encargadoAccess = (req, res) => {
    res.status(200).send("Contenido de encargado");
  };
