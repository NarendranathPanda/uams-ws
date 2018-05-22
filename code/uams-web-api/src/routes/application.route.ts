import * as express from "express";

import LoginRouter from "./login.route";


export default class ApplicationRouter {
  public static create(router: express.Router) {
       LoginRouter.create(router);
  }
}
