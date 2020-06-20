import { createServer, ServerOptions, Request, Response, Next } from "restify"
const serverOptions: ServerOptions = { name: "library", version: "1.0.0" };
const server = createServer(serverOptions);

server.listen(3000, () => {
    console.log("teste");
})

function respond(req: Request, res: Response, next: Next) {
    res.send("olá");
    next();
};

server.get("/",respond);



