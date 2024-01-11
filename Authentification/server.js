import express from'express';
import { connection } from './postgrsql.js';

const app = express();
//var routes = require();
import routes from './routes/routes.js'

const PORT = process.env.PORT || 4010;

app.get("/", (req, res) => {
    res.send("Hello");
});

connection();

app.listen(PORT, function check(err)
{
    if(err)
    console.log("error");
    else
    console.log("started on port "+ PORT);
});

/*const client = new Client({
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

app.use(express.json());
app.use(routes);