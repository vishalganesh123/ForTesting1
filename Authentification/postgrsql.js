import { Sequelize }  from "sequelize";
import { studentModel } from "./src/student/studentModel.js";

/*const client = new Sequelize({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'Proxiad2024*!',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
})
client.connect((err)=>{
    if(err){
        console.error('connection error', err.stack)
    }
    else{
        console.log('connected')
    }
})*/

export const connection= async()=>{
    const sequelize = new Sequelize('postgres', 'postgres', 'Proxiad2024*!', {
        host: 'localhost',
        dialect: 'postgres' 
      });
      let Student =null;
      try 
      {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        Student = studentModel(sequelize);
        await sequelize.sync();
        console.log("table created successfully.");
      } 
      catch (error) 
      {
        console.error('Unable to connect to the database:', error);
      }

}
