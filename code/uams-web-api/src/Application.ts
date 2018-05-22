import * as http from "http";
import * as path from 'path';
import * as express from 'express';
import Logger from "./config/logger";
import * as bodyParser from 'body-parser';
import config from "./config/express";
import ApplicationRouter from "./routes/application.route";

let hostname = "0.0.0.0";
let defaultPort = process.env.PORT || "8080";

export default class Application  {
    app: express.Express;
    server: http.Server;
    port: string;
   

    constructor() {
        this.app = config(express());

        this.server = http.createServer(this.app);
        
		this.routes();

        this.start(this.server);

    }

    public static bootstrap(): Application {
        return new Application();
    }

    private routes(): void {
        let router: express.Router = express.Router({ caseSensitive: true });
        ApplicationRouter.create(router);
      
       
        this.app.use(router);
    }

    public start(server) {
        this.port = defaultPort;

        server.listen(this.port, "0.0.0.0");

        server.on("error", (e: Error) => {
            Logger.Instance.error("UAMS: " + "error starting server!", e.message);
        });

        server.on("listening", () => {
            Logger.Instance.info("UAMS: " + "Server started on http://" + hostname + ":" + this.port + " mode:" + this.app.settings.env);
        });
    }

}

