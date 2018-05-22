import * as express from "express";

import LoginController from "../controllers/login.service.controller";
let cors = require("cors");

let corsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  "allowedHeaders": "Content-Type"
};

const fs = require('fs');

let info = fs.readFileSync('info.json'); 

export default class LoginRouter {
  public static create(router: express.Router) {
	  
	  
	/**
      *
      * @swagger
      * "/login/loginSessionWithoutCapReq": {
          "post": {
            "tags": [
              "User Management"
            ],
            "summary": "User Login",
            "description": "Takes the User Email ID and Password for login and authentication",
            "operationId": "Login",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "parameters":[
              {
                "in": "body",
                "name": "body",
                "description": "User email ID and password",
                "schema":{
                  "properties":{
                    "email":
                    {
                      "type":"string"
                    },
                    "password":
                    {
                      "type":"string",
                      "format": "password"
                    }
                  }
                }
              }
            ],
            "responses": {
              "200":{
                "description": "Login Successful"
              }
            }
          }
        }
    */
		router.get('/', function (req, res) {
			 res.setHeader('Content-Type', 'application/json');
			 res.send(JSON.parse(info))
		}  )
		router.post('/login', LoginController.loginSession)
  }
  
}
