import * as express from "express";
import Logger from "../config/logger";
import LoginService from "../services/loginService";
import ResponseHandler from "../config/app.utils.response.handler";


export default class LoginController {

    public static loginSession(req: express.Request, res: express.Response, next: Function): void {
        let getEmailID: string = req.body.email || "";
        let getpassword: string = req.body.password || "";
      
        let userCredentials = {
            email_id: getEmailID,
            password: getpassword,
           
        };
        Logger.Instance.info("UAMS: " + "EMAILID:", getEmailID, "loginSessionRbac Req");
        LoginService.getInstance().loginSession(userCredentials, (err, data) => ResponseHandler.getInstance().sendHttpResponse(err, data, res));
    }

   
}