const MongoClient = require("mongodb").MongoClient;
let db = null;

module.exports = class MongoDModel {
  static async getDB() {
    if (!db) {
      try {
        let conn = await MongoClient.connect(process.env.MONGOURI, {});
        db = conn.db(process.env.MONGODB);
        return db;
      } catch (e) {
        console.log(e);
        throw e;
      }
    } else {
      return db;
    }
  }
};
