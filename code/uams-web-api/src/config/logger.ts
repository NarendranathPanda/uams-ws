import * as winston from "winston";

let path = require("path");
let winston_dailly_rotate = require("winston-daily-rotate-file");
const tsFormat = () => (new Date()).toLocaleString();

let transportConsole = new winston.transports.Console({
    colorize: true,
    prettyPrint: true,
    timestamp: tsFormat
});

export default class Logger {
    private static logger: winston.Logger;

    private constructor() {
    }

    static get Instance() {
        if (this.logger === null || this.logger === undefined) {
            this.logger = new (winston.Logger)({
                transports: [
                    transportConsole
                ]
            });
        }

        return this.logger;
    }
}