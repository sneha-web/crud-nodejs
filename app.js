import express from "express";
import connectDB from './db/conndb.js';
import {join} from "path";
import web from "./routes/web.js";
const app = express();
const port = process.env.PORT || '3000'

const Db_URL = process.env.Db_URL || "mongodb://localhost:27017";


// Database Connection;
connectDB(Db_URL);

//middleware

app.use(express.urlencoded({extended:false}))

// Static Files
app.use('/', express.static(join(process.cwd(), "public")));
app.use('/edit', express.static(join(process.cwd(), "public")));

//Set Template Engine
app.set("view engine", "ejs");

// Routes Load
app.use("/", web);



// listen port
app.listen(port, ()=>{
    console.log(`Server listing at http://localhost:${port}`);
})