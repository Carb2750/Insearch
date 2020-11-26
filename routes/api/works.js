const express = require("express");
const router = express.Router();

const isAuth = require('../../middleware/isAuth.js');

const WorkModelClass = require("../../models/work/work.model");
const mdbWorkModel = new WorkModelClass();

router.get("/all", async (req, res) => {
  try {
    const rslt = await mdbWorkModel.getAll();
    res.status(200).json(rslt);
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "Algo salió mal" });
  }
});

router.post('/new', isAuth, async (req, res) => {
    try {
      const rol = req.body.rol;
      if(rol == "enterprise") {
        const { nombre, descripcion, responsabilidades, requisitos, preferencias, tipo_solicitud, duracion, mensaje_aprobacion, mensaje_rechazo, id_empresa } = req.body;
        const result = await mdbWorkModel.addOne({ nombre, descripcion, responsabilidades, requisitos, preferencias, tipo_solicitud, duracion, mensaje_aprobacion, mensaje_rechazo, id_empresa });
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

router.put("/update/:id", isAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const rol = req.body.rol;
    if(rol == "enterprise") {      
      let {  nombre, descripcion, responsabilidades, requisitos, preferencias, tipo_solicitud, duracion, mensaje_aprobacion, mensaje_rechazo } = req.body;
      const result = await mdbWorkModel.updateById(id, nombre, descripcion, responsabilidades, requisitos, preferencias, tipo_solicitud, duracion, mensaje_aprobacion, mensaje_rechazo);
      res.status(200).json(result);
    }
    else {
      res.status(500).json({"error":"No está conectado a una cuenta empresarial"})
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "No se pudo actualizar "});
  }
})

router.delete("/delete/:id", isAuth, async (req, res) => {
  try{
    let {id} = req.params;
    const rol = req.body.rol;
    if(rol == "enterprise") {
      let rslt = await mdbWorkModel.removeById(id);
      res.status(200).json(rslt);
    }
    else {
      res.status(500).json({"error":"No está conectado a una cuenta empresarial"})
    }
  } catch(e){
    console.log(e);
    res.status(500).json({ "msg": "No se pudo borrar" });
  }
})

router.get("/getAllByEnterprise/:id", async (req, res) => {
  try {
    let {id} = req.params;
    const rslt = await mdbWorkModel.getAllByEnterprise(id);
    res.status(200).json(rslt);
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "Algo salió mal" });
  }
});

module.exports = router;