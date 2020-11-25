const express = require("express");
const router = express.Router();

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

router.post('/new', async (req, res) => {
    try {
        const { nombre, descripcion, responsabilidades, requisitos, preferencias, tipo_solicitud, duracion, mensaje_aprobacion, mensaje_rechazo } = req.body;
        const result = await mdbWorkModel.addOne({ nombre, descripcion, responsabilidades, requisitos, preferencias, tipo_solicitud, duracion, mensaje_aprobacion, mensaje_rechazo });
        res.status(200).json({ msg: "Se agregó con exito" })
    } catch(e) {
        console.log(e);
        res.status(500).json({ msg: "No se agregó: ", error: e});
    }
})

router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let {  nombre, descripcion, responsabilidades, requisitos, preferencias, tipo_solicitud, duracion, mensaje_aprobacion, mensaje_rechazo } = req.body;
    const result = await mdbWorkModel.updateById(id, nombre, descripcion, responsabilidades, requisitos, preferencias, tipo_solicitud, duracion, mensaje_aprobacion, mensaje_rechazo);
    res.status(200).json(result);
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "No se pudo actualizar "});
  }
})

router.delete("/delete/:id", async (req, res) => {
  let {id} = req.params;
  try{
    let rslt = await mdbWorkModel.removeById(id);
    res.status(200).json(rslt);
  } catch(e){
    console.log(e);
    res.status(500).json({ "msg": "No se pudo borrar" });
  }
})

module.exports = router;