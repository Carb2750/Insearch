const express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

let SecurityModel = require("../../models/security/security.model");
let SecMdl = new SecurityModel();
// login
router.post('/login', async(req, res)=>{
  try{
    let { email, password } = req.body;
    let User = await SecMdl.getUserByEmail(email);
    if(!User){
      console.log("Usuario no existe:" + email);
      res.status(401).json({"error":"No se pueden validar sus credenciales."});
    } else {
      //Validaciones del usuairo que cumplan las reglas de negocio
      let isValidPassword = await SecMdl.comparePassword(password, User.password);
      if(isValidPassword){
        let { _id, email } = User;
        let token = jwt.sign({ _id, email }, process.env.JWT_SECRET);
        res.status(200).json({ jwt: token, user: { _id, email } });
      }else{
        console.log("Contraseña Incorrecta:" + email);
        res.status(401).json({ "error": "No se pueden validar sus credenciales." });
      }
      
    }
    
  }catch(ex){
    console.log(ex);
    res.status(500).json({ "msg": "Algo Salió Mal" })
  }
}); //post login

// signout
router.post('/signup', async(req, res)=>{
  try{
    let { email, password, name, photo, description, location, website } = req.body;
    // realizar validaciones
    let rslt = await SecMdl.addEnterpriseUser({email, password, email, password, name, photo, description, location, website});
    res.status(200).json(rslt);
  }catch(ex){
    console.log(ex);
    res.status(500).json({"msg":"Algo Salió Mal"})
  }
}); // post signout

module.exports = router;