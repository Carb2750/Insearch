const { use } = require("passport");
const MongoDB = require("../db");
var ObjectID = require('mongodb').ObjectID;

const UsersModel = require('../security/security.model');
const users = new UsersModel();

class ApplyModel {
  collection = null;

  constructor() {
    const db = MongoDB.getDB()
      .then(async (db) => {
        this.collection = db.collection("applied_jobs");
        // if (process.env.ENSURE_INDEX == "1") {
        //   await this.collection.createIndex({ "id_user": 1 }, { unique: true });
        // }
      })
      .catch((e) => {
        console.log(e);
        throw e;
      });
  }

  async getAll(id) {
    try {
      const result = await this.collection.find({"id_work":id}).toArray(); 
      return result;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async addOne(document) {
    try {
      const id = new ObjectID(document["id_user"]); 
      const {username, email, name, lastname, career, photo} = await users.getUserById(id);
      const id_work = new ObjectID(document.id_work);

      document = {
          ...document,
          username,
          email,
          name,
          lastname,
          career,
          photo
      }

      const appliedDate = new Date().toJSON().slice(0,10).replace(/-/g,'/')
      document["fecha"] = appliedDate;
      // document["id_empresa"] = idEnterprise;
      // delete document["id_enterprise"]
      await this.collection.update({"id_user":id, 'id_work':id_work}, {'$setOnInsert':document}, {upsert:true});
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}

module.exports = ApplyModel;
