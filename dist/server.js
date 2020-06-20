"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify_1 = require("restify");
const serverOptions = {
    name: "library",
    version: "1.0.0"
};
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
