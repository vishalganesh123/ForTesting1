
import { createStudentDBService } from './studentService';
var studentService = createStudentDBService;//require('./studentService');

const createStudentControllerFn = async(req, res) =>
{
    try
    {
        console.log(req.body);
        var status = await studentService.createStudentDBService(req.body);
        console.log(status);

        if(status){
            res.send({ "staus": true, "message": "Student created successfully" });
        }
        else{
            res.send({ "staus": false, "message": "Error creating student" });
        }
    
    }
    catch(err)
    {
        console.log(err);
    }
}

export default createStudentControllerFn;
//module.exports = { createStudentControllerFn }