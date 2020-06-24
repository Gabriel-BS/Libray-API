import { createServer, ServerOptions, Request, Response, Next } from "restify"
import { bootstrap } from "./bootstrap";

const serverOptions: ServerOptions = { 
    name: "library", 
    version: "1.0.0" 
};

const server = createServer(serverOptions);
server.listen(3000, async () => {
    await bootstrap()
    console.log("Rodando na porta 3000")
})

