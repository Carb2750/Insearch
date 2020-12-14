var MongoDB = require('../db');
var ObjectID = require('mongodb').ObjectID;
var bcrypt = require('bcrypt');

class SecurityModel {
  constructor() {
    this.collection = null;
      MongoDB.getDB().then(async (db)=>{
        this.collection =  await db.collection('users');
        if (process.env.ENSURE_INDEX == "1") {
          await this.collection.createIndex({ "email": 1 }, { unique: true });
        }
      }
    ).catch((ex)=>{
        throw(ex);
      }
    )
  }
  async addEnterpriseUser( data ) {
    const {email, password, name, photo, description, location, website} = data;
    try {
      let newUser = {
        "email": email,
        "password": bcrypt.hashSync(password, 10),
        "name": name,
        "photo":photo,
        "description":description,
        "location":location,
        "website":website,
        "lastlogin": 0,
        "lastpwdchg": 0,
        "pwdexp": new Date().getTime() + (1000*60*60*24*90), /* mils, s , m, h, d */
        "oldpwd":[],
        "roles":["enterprise"]
      }
      let result = await this.collection.insertOne(newUser);
      return result;
    } catch(e){
      throw(e);
    }
  }

  async addUser( data ) {
    const {username, email, name, lastname, password, birthdate, career,photo, achievements} = data;
    try {
      let nuevo = {
        "username": username,
        "email": email,
        "name": name,
        "lastname": lastname,
        "password": bcrypt.hashSync(password, 10),
        "birthdate": birthdate,
        "career": career,
        "lastlogin": 0,
        "lastpwdchg": 0,
        "pwdexp": new Date().getTime() + (1000*60*60*24*90), /* mils, s , m, h, d */
        "oldpwd":[],
        "roles":["user"]
      }
      let rslt = await this.collection.insertOne(nuevo);
      return rslt;
    } catch(e){
      throw(e);
    }
  }

  async getUserByEmail(email){
    try{
      const filter = {"email":email};
      let User = await this.collection.findOne(filter);
      return User;
    }catch(e){
      throw(e);
    }
  }

  async comparePassword(rawPswd, crptoPswd){
    try{
      return await bcrypt.compare(rawPswd, crptoPswd);
    }catch(e){
      throw(e);
    }
  }

  async getUserById(id){
    try{
      console.log(id);
      const filter = {"_id":id};
      let User = await this.collection.findOne(filter);
      return User;
    }catch(e){
      throw(e);
    }
  }
  async getById(id) {
    try{
      const _id = new ObjectID(id);
      let oneDoc = await this.collection.findOne({_id});
      return oneDoc;
    }catch(ex){
      throw(ex);
    }
  }

  async updateUserById(id, info) {
    try{
      const _id = new ObjectID(id);
      const updOps = {"$set":{"username":info.username, "email":info.email, "name":info.name, "lastname":info.lastname, "password":info.password, "birthdate":info.birthdate, "career":info.career, "photo":info.photo, "achievements":info.achievements}};
      let updDoc = await this.collection.findOneAndUpdate({ _id }, updOps, { returnOriginal:false});
      return updDoc;
    }catch(ex){
      throw(ex);
    }
  }

  async updateById(id, info) {
    try{
      const _id = new ObjectID(id);
      const updOps = {"$set":{"email":info.email, "password":info.password, "name":info.name, "photo":info.photo, "description":info.description, "location":info.location, "website":info.website}};
      let updDoc = await this.collection.findOneAndUpdate({ _id }, updOps, { returnOriginal:false});
      return updDoc;
    }catch(ex){
      throw(ex);
    }
  }
  
  async removeById(id) {
    try{
      const _id = new ObjectID(id);
      let rslt = await this.collection.deleteOne({_id});
      return rslt;
    }catch(ex){
      throw(ex);
    }
  }

  async getFavs(id) {
    try {
      id = new ObjectID(id);
      const user = await this.getUserById(id);
      return user;
    } catch(e) {
      throw(e)
    }
  }

  async addToFav(id, id_work) {
    try {
      const _id = new ObjectID(id);
      id_work = new ObjectID(id_work);
  
      const addOps = {"$addToSet":{"favs":id_work}};
      await this.collection.findOneAndUpdate({_id}, addOps, { returnOriginal:false });
    } catch(e) {
      throw(e);
    }
  }

  async removeFav(id, id_work) {
    try {
      const _id = new ObjectID(id);
      id_work = new ObjectID(id_work);
  
      const addOps = {"$pull":{"favs":id_work}};
      await this.collection.findOneAndUpdate({_id}, addOps, { returnOriginal:false });
    } catch(e) {
      throw(e);
    }
  }
}

module.exports = SecurityModel;