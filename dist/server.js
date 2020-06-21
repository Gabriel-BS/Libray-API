"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify_1 = require("restify");
const user_1 = require("./models/user");
const serverOptions = {
    name: "library",
    version: "1.0.0"
};
const server = restify_1.createServer(serverOptions);
server.listen(3000, () => {
    console.log("Rodando na porta 3000");
    const user = new user_1.default({});
    user.sequelize.sync({});
});
// function respond(req: Request, res: Response, next: Next) {
//     res.send("oláaaa");
//     next();
// };
// server.get("/",respond);
