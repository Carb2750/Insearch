const express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

let SecurityModel = require("../../models/security/security.model");
let SecMdl = new SecurityModel();

router.post('/login', async(req, res)=>{
  try{
    let { email, password} = req.body;
    let User = await SecMdl.getUserByEmail(email);
    if(!User){
      console.log("Usuario no existe:" + email);
      res.status(401).json({"error":"No se pueden validar sus credenciales."});
    } else {
      let isValidPassword = await SecMdl.comparePassword(password, User.password);
      if(isValidPassword){
        let { _id, email, roles } = User;
        let token = jwt.sign({ _id, email, roles }, process.env.JWT_SECRET);
        res.status(200).json({ jwt: token, user: { _id, email, roles } });
      }else{
        console.log("Contraseña Incorrecta:" + email);
        res.status(401).json({ "error": "No se pueden validar sus credenciales." });
      }
    }
  }catch(ex){
    console.log(ex);
    res.status(500).json({ "msg": "Algo Salió Mal" })
  }
});

router.post('/signupuser', async(req, res)=>{
  try{
    let { username, email, name, lastname, password, birthdate, career, photo, achievements} = req.body;
    let rslt = await SecMdl.addUser({username, email, name, lastname, password, birthdate, career, photo, achievements});
    res.status(200).json(rslt);
  }catch(ex){
    console.log(ex);
    res.status(500).json({"msg":"Algo Salió Mal"})
  }
}); 

router.post('/signup', async(req, res)=>{
  try{
    let { email, password, name, photo, description, location, website } = req.body;
    let rslt = await SecMdl.addEnterpriseUser({email, password, email, password, name, photo, description, location, website});
    res.status(200).json(rslt);
  }catch(ex){
    console.log(ex);
    res.status(500).json({"msg":"Algo Salió Mal"})
  }
}); 

module.exports = router;
