const { use } = require("passport");
const MongoDB = require("../db");
var ObjectID = require('mongodb').ObjectID;

const UsersModel = require('../security/security.model');
const users = new UsersModel();

class FavoriteModel {
  collection = null;

  constructor() {
    const db = MongoDB.getDB()
      .then((db) => {
        this.collection = db.collection("favorites");
      })
      .catch((e) => {
        console.log(e);
        throw e;
      });
  }

  async getAll() {
    try {
      const result = await this.collection.find({}).toArray();
      return result;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async addOne(document) {
    try {
      const id_empresa = new ObjectID(document["id_empresa"])
      const id_user = new ObjectID(document["id_user"])
      const enterpriseUser = await users.getUserById(id_empresa);
      const enterpriseData = {
        "id_empresa":id_empresa,
        "enterprise_name":enterpriseUser["name"],
        "id_usuario":id_user
      }
      document["search"] = enterpriseData; 
      delete document["id_empresa"]
      delete document["id_user"]
      delete document["rol"]
      delete document["mensaje_aprobacion"]
      delete document["mensaje_rechazo"]
      const result = await this.collection.insertOne(document);

      return result;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async removeById(id) {
    try{
      const _id = new ObjectID(id);
      let rslt = await this.collection.deleteOne({_id});
      return rslt;
    }catch(e){
      throw(e);
    }
  }
}

module.exports = FavoriteModel;
