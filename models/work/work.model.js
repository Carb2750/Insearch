const { use } = require("passport");
const MongoDB = require("../db");
var ObjectID = require('mongodb').ObjectID;

const UsersModel = require('../security/security.model');
const users = new UsersModel();

class WorkModel {
  collection = null;

  constructor() {
    const db = MongoDB.getDB()
      .then((db) => {
        this.collection = db.collection("works");
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
      const enterpriseUser = await users.getUserById(id_empresa);
      const fecha_publicacion = new Date().toJSON().slice(0,10).replace(/-/g,'/')
      document["fecha_publicacion"] = fecha_publicacion;
      const enterpriseData = {
        "id_empresa":id_empresa,
        "enterprise_name":enterpriseUser["name"]
      }
      document["empresa"] = enterpriseData; 
      delete document["id_empresa"]
      const result = await this.collection.insertOne(document);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async updateById(id, nombre, descripcion, responsabilidades, requisitos, preferencias, tipo_solicitud, duracion, mensaje_aprobacion, mensaje_rechazo) {
    try{
      const fecha_publicacion = new Date().toJSON().slice(0,10).replace(/-/g,'/');
      const _id = new ObjectID(id);
      const updOps = {"$set":{"nombre": nombre, "descripcion": descripcion, "responsabilidades": responsabilidades, "requisitos": requisitos, "preferencias": preferencias, "tipo_solicitud": tipo_solicitud, "duracion": duracion, "mensaje_aprobacion": mensaje_aprobacion, "mensaje_rechazo": mensaje_rechazo, "fecha_publicacion": fecha_publicacion}};
      let updDoc = await this.collection.findOneAndUpdate({ _id }, updOps, { returnOriginal:false});
      return updDoc;
    }catch(e){
      throw(e);
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

  async getAllByEnterprise(id) {
    try{
      const id_enterprise = new ObjectID(id);
      const result = await this.collection.find({"empresa.id_empresa":id_enterprise}).toArray(); 
      return result;
    }catch(e) {
      throw(e);
    }
  }
}

module.exports = WorkModel;
