import Logger from "../config/logger";
import Path = require("path");
import ResponseHandler from "../config/app.utils.response.handler";


export default class LoginService {

    private static instance: LoginService;

    static getInstance(): LoginService {
        if (this.instance === null || this.instance === undefined) {
            this.instance = new LoginService();
        }

        return this.instance;
    }

    public loginSession(userCredentials, callback: Function): void {
        Logger.Instance.info("UAMS: " + "EMAILID:", userCredentials.email_id, "loginSession grpc service");
        Logger.Instance.info("logged in");  
				
    }

   
}