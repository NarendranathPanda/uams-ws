import * as http from 'http';
import * as debug from 'debug';

import Application from './Application';

let app = new Application();
let swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

const spec = swaggerJSDoc({
    "swaggerDefinition": {
        "info": {
            "title": "UAMS - University Assignment Management System",
            "version": "1.0.0"
        },
        "produces": ["application/json"],
        "consumes": ["application/json"],
        "host": process.env.routeurl,
        "basePath": "/api/v2"
        
    },
    "apis": [
        "./src/routes/login.route.ts"
        
    ]
});