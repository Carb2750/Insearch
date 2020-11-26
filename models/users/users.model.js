const MongoDB = require("../db");
var ObjectID = require('mongodb').ObjectID;

class UsersModel {
  collection = null;

  constructor() {
    const db = MongoDB.getDB()
      .then((db) => {
        this.collection = db.collection("users");
      })
      .catch((e) => {
        console.log(e);
        throw e;
      });
  }

  async updateById(id) {
    try{
        const _id = new ObjectID(id);
        let oneDoc = await this.collection.findOne({_id});
        return oneDoc;
      /*const _id = new ObjectID(id);
      const updOps = {"$set":{}};
      let updDoc = await this.collection.findOneAndUpdate({ _id }, updOps, { returnOriginal:false});
      return updDoc;*/
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
}

module.exports = UsersModel;
