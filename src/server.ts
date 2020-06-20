import { createServer, ServerOptions, Request, Response, Next } from "restify"
import { Sequelize, Options } from "sequelize";
import User from "./models/user";

const serverOptions: ServerOptions = { 
    name: "library", 
    version: "1.0.0" 
};

const server = createServer(serverOptions);
server.listen(3000, () => {
    console.log("Rodando na porta 3000")
    const user = new User({})
    user.sequelize.sync({})
    
})

// function respond(req: Request, res: Response, next: Next) {
//     res.send("oláaaa");
//     next();
// };

// server.get("/",respond);



