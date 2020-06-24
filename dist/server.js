"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify_1 = require("restify");
const bootstrap_1 = require("./bootstrap");
const serverOptions = {
    name: "library",
    version: "1.0.0"
};
const server = restify_1.createServer(serverOptions);
server.listen(3000, async () => {
    await bootstrap_1.bootstrap();
    console.log("Rodando na porta 3000");
});
