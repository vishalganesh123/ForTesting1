import { Sequelize }  from "sequelize";

 export const studentModel=(sequelize)=>{
    const {DataTypes} = sequelize;

    return sequelize.define("studentModel",{
        firstname: {
            type: DataTypes.STRING,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    });
}

//module.exports = { studentModel };

//var pg = require('pg');
//var Schema = new pg().Schema;

/*var studentSchema = new Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = pg.model('student', studentSchema);*/