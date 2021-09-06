 /** packages*/

 const mongoose = require("mongoose")
 const validator = require("mongoose-unique-validator")
 /**Creacion del shema */
 const productschema = new mongoose.Schema({
 
     code:{
         type: "String",
         required: true,
         unique:true 
 
     },
     name:{
         type: "String",
         required: true
 
     },
     price:{
         type: "String",
         required: true
 
     },
     existence:{
         type: "Number",
         required: true,
         
 
     },
     discount:{
         type: "String",
         required: true
 
     },
     brand:{
         type: "String",
         required: true
 
     },
     category:{
         type: "String",
         required: true
 
     }
 })
 
 /**Exportando schema  */
 productschema.plugin(validator)
 module.exports = productschema