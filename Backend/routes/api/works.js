const express = require("express");
const router = express.Router();

const isAuth = require('../../middleware/isAuth.js');

const WorkModelClass = require("../../models/work/work.model");
const mdbWorkModel = new WorkModelClass();

const ApplyModelClass = require("../../models/work/apply.model");
const applyModel = new ApplyModelClass();

const UsersModelClass = require('../../models/security/security.model');
const usersModel = new UsersModelClass();

router.get("/all", async (req, res) => {
  try {
    const currentPage = req.query.page || 1;
    const perPage = 5;
    const puesto = req.query.puesto || "";
    const experiencia = req.query.experiencia || "";
    const params = {
      currentPage, perPage, puesto, experiencia
    }
    const rslt = await mdbWorkModel.getAll(params);
    res.status(200).json(rslt);
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "Algo salió mal" });
  }
});

router.get("/filter", async (req, res) => {
  try {
    const currentPage  = req.query.page || 1;
    const perPage = 5;
    const puesto = req.query.puesto || "";
    const experiencia = req.query.experiencia || "";
    const result = await mdbWorkModel.getByFilter({currentPage, perPage, puesto, experiencia});
    res.status(200).json(result);
  } catch(e) {
    console.log(e);
    res.status(500).json({msg: "Algo salií mal"});
  }
})

router.get('/getbyid/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await mdbWorkModel.getById({_id:id});
    res.status(200).json(result);
  } catch(e) {
    console.log(e);
    res.status(500).json({msg: "Algo salió mal"});
  }
})

router.post('/new', isAuth, async (req, res) => {
    try {
      const rol = req.body.rol;
      if(rol == "enterprise") {
        const result = await mdbWorkModel.addOne(req.body);
        res.status(200).json({ msg: "Se agregó con exito", result })
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

router.delete("/delete", isAuth, async (req, res) => {
  try{
    let {id} = req.query;
    const rol = req.query.rol;
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

router.get("/getAllByEnterprise", isAuth, async (req, res) => {
  try {
    let {id} = req.query;
    const rslt = await mdbWorkModel.getAllByEnterprise(id);
    res.status(200).json(rslt);
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "Algo salió mal" });
  }
});

router.get("/allApplicants/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const rslt = await applyModel.getAll(id);
    res.status(200).json(rslt);
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "Algo salió mal" });
  }
});

router.post('/apply', isAuth, async(req, res) => {
  try {
    const rol = req.body.rol;
    if(rol == "user") {
      const {id_user, id_work} = req.body;
      await applyModel.addOne({ id_user, id_work });
      res.status(200).json({ msg: "Se agregó con exito" })
    }
    else {
      res.status(500).json({"error":"No está conectado a una cuenta"})
    }
  } catch(e) {
      console.log(e);
      res.status(500).json({ msg: "No se agregó: ", error: e});
  }
})

router.get('/getfavs', isAuth, async(req, res) => {
  try {
    const rol = req.query.rol;
    console.log("BODY: " + JSON.stringify(req.body));
    console.log("PARAMS: " + JSON.stringify(req.params));
    if(rol == "user") {
      const id = req.query.id;
      const user = await usersModel.getFavs(id);
      const result = await mdbWorkModel.getFavs(user);
      res.status(200).json({result});
    }
    else {
      res.status(500).json({"error":"No está conectado a una cuenta de usuario"});
    }
  } catch(e) {
    res.status(500).json({msg: "No se pudieron obtener los favoritos", error:e});
  }
})

router.post('/addfav', isAuth, async(req, res) => {
  try {
    const rol = req.body.rol;
    if(rol == "user") {
      const document = req.body;
      const result = await mdbWorkModel.addToFav(document);
      res.status(200).json({result});
    }
    else {
      res.status(500).json({"error":"No está conectado a una cuenta de usuario"});
    }
  } catch(e) {
    res.status(500).json({msg: "No se agregó", error:e});
  }
})

module.exports = router;