const express = require("express");
const router = express.Router();

const isAuth = require('../../middleware/isAuth.js');

const UsersModelClass = require("../../models/users/users.model");
const mdbUsersModel = new UsersModelClass();

router.get("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    //let { username, email, name, lastname, password, birthdate, career, photo, achievements } = req.body;
    let oneDocument = await mdbUsersModel.getById(id); 
    //const result = await mdbUsersModel.updateById(id, username, email, name, lastname, password, birthdate, career, photo, achievements);
    res.status(200).json(oneDocument);
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
      let rslt = await mdbUsersModel.removeById(id);
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

module.exports = router;