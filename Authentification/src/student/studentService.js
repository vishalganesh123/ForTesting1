import { studentModel } from './studentModel.js'
//var studentModel = require('./studentModel');
var key = '123456789trytrytryr';
var encryptor = require('simple-encryptor')(key);

export const createStudentDBService = (studentDetails) => {


    return new Promise(function myFn(resolve, reject){

        var studentModelData = new studentModel();
        studentModelData.firstname = studentDetails.firstname;
        studentModelData.lastname = studentDetails.lastname;
        studentModelData.email = studentDetails.email;
        studentModelData.password = studentDetails.password;
        var encrypted = encryptor.encrypt(studentDetails.password);
        studentModelData.password = encrypted;

        studentModelData.save(function resultHandle(error, result){

            if(error){
                reject(false);
            }
            else{
                resolve(true);
            }
        })


    })





}