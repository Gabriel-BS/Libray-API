"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify_1 = require("restify");
const sequelize_1 = require("sequelize");
const serverOptions = {
    name: "library",
    version: "1.0.0"
};
const postgresConnOptions = {
    dialect: 'postgres',
    host: '34.70.44.42',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'postgres'
};
const sequelize = new sequelize_1.Sequelize(postgresConnOptions);
const server = restify_1.createServer(serverOptions);
server.listen(3000, () => {
    console.log("teste");
});
function respond(req, res, next) {
    res.send("oláaaa");
    next();
}
;
server.get("/", respond);
