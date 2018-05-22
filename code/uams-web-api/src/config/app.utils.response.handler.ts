import { HTTP } from "../config/http.codes";
import Logger from "../config/logger";

export default class ResponseHandler {
    private static instance: ResponseHandler;

    static getInstance(): ResponseHandler {
        if (this.instance === null || this.instance === undefined) {
            this.instance = new ResponseHandler();
        }
        return this.instance;
    }

    public sendHttpResponse(err: any, data: any, res: any) {
        if (err) {
            res.status(HTTP.OK).send(err);
            return;
        }
        res.status(HTTP.OK).send(data);
    }

   
}