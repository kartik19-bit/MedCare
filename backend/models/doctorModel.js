import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
      name: {type:String , required:true} , 
      email: {type:String , required:true , unique:true} ,
      password: {type:String , required:true} ,
      image: {type:String , required:true} ,
      speciality: {type:String , required:true} ,
      degree: {type:String , required:true} ,
      experience: {type:String , required:true} ,
      about: {type:String , required:true} ,
      available: {type:Boolean , default:true} ,
      fees: {type:Number , required:true} ,
      address: {type:Object , default:{line1:'' , line2:''}},
      date: {type:Number , required:true} ,
      slots_booked: {type:Object , default:{}} ,

} , {minimize:false})

const doctorModel = mongoose.models.doctor || mongoose.model('doctor' , doctorSchema)
// If the 'doctor' model already exists, use it; otherwise, create a new model using 'doctorSchema'

export default doctorModel;

