const express = require("express");
const router = express.Router();

const isAuth = require('../../middleware/isAuth.js');

const FavoritesModelClass = require("../../models/favs/favorites.model");
const mdbFavoritesModel = new FavoritesModelClass();

router.get("/all", async (req, res) => {
  try {
    const rslt = await mdbFavoritesModel.getAll();
    res.status(200).json(rslt);
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "Algo salió mal" });
  }
});

router.post('/new', isAuth, async (req, res) => {
    try {
      const rol = req.body.rol;
      if(rol == "user") {
        const { nombre, descripcion, responsabilidades, requisitos, preferencias, tipo_solicitud, duracion, mensaje_aprobacion, mensaje_rechazo, id_empresa, id_user } = req.body;
        const result = await mdbFavoritesModel.addOne({ nombre, descripcion, responsabilidades, requisitos, preferencias, tipo_solicitud, duracion, mensaje_aprobacion, mensaje_rechazo, id_empresa, id_user });
        res.status(200).json({ msg: "Se agregó con exito" })
      }
      else {
        res.status(500).json({"error":"No está conectado a una cuenta empresarial"})
      }
    } catch(e) {
        console.log(e);
        res.status(500).json({ msg: "No se agregó: ", error: e});
    }
})

router.delete("/delete/:id", isAuth, async (req, res) => {
  try{
    let {id} = req.params;
    let rslt = await mdbFavoritesModel.removeById(id);
    res.status(200).json(rslt);
  } catch(e){
    console.log(e);
    res.status(500).json({ "msg": "No se pudo borrar" });
  }
})

module.exports = router;