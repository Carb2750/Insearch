const { use } = require("passport");
const MongoDB = require("../db");
var ObjectID = require('mongodb').ObjectID;

const UsersModel = require('../security/security.model');
const users = new UsersModel();

class ApplyModel {
  collection = null;

  constructor() {
    const db = MongoDB.getDB()
      .then((db) => {
        this.collection = db.collection("applied_jobs");
      })
      .catch((e) => {
        console.log(e);
        throw e;
      });
  }

  async getAll(id) {
    try {
      const id_enterprise = new ObjectID(id);
      const result = await this.collection.find({"id_empresa":id_enterprise}).toArray(); 
      return result;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async addOne(document) {
    try {
      const id = new ObjectID(document["id"]); 
      const idEnterprise = new ObjectID(document["id_enterprise"])
      const {username, email, name, lastname, career, photo, achievements} = await users.getUserById(id);

      document = {
          ...document,
          username,
          email,
          name,
          lastname,
          career,
          photo,
          achievements
      }

      const appliedDate = new Date().toJSON().slice(0,10).replace(/-/g,'/')
      document["fecha"] = appliedDate;
      document["id_empresa"] = idEnterprise;
      delete document["id_enterprise"]
      const result = await this.collection.insertOne(document);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}

module.exports = ApplyModel;
