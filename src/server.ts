import { createServer, ServerOptions, Request, Response, Next } from "restify"
import { Sequelize, Options } from "sequelize";

const serverOptions: ServerOptions = { 
    name: "library", 
    version: "1.0.0" 
};

const postgresConnOptions: Options = {
    dialect: 'postgres',
    host: '34.70.44.42',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'postgres'
}

const sequelize = new Sequelize(postgresConnOptions)


const server = createServer(serverOptions);

server.listen(3000, () => {
    console.log("teste");
})

function respond(req: Request, res: Response, next: Next) {
    res.send("oláaaa");
    next();
};

server.get("/",respond);



