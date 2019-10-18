import winston from "winston";
import path from "path";
import "winston-daily-rotate-file";
import chalk from "chalk";
// import Sentry from "../configs/sentry.config";

const logman = winston.createLogger({
  levels: winston.config.syslog.levels,
  format: winston.format.combine(
    winston.format.label({
      label: path.basename(process.mainModule.filename)
    }),
    winston.format.colorize(),
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    }),
    winston.format.printf(
      info => {
        var level = info.level;
        let message;
        switch (level) {
          case "\u001b[32minfo\u001b[39m": // INFO
            message = chalk.bgGreen.black(info.message);
            break;

          case "\u001b[31merror\u001b[39m": // ERROR
            // // log error to sentry
            // if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "test") {
            //   Sentry.captureMessage(info.message, "error");
            // }
            message = chalk.whiteBright.bgRed(info.message);
            break;
          default:
            message = chalk.cyan(level);
            break;
        }
        return `${info.timestamp} ${info.level} [${info.label}]: ${message}`;
      }
    )

  ),

  transports: [
    new(winston.transports.DailyRotateFile)({
      filename: path.join(__dirname, "..", "..", "logman", "btask-%DATE%.log"),
      datePattern: "YYYY-MM-DD-HH",
      zippedArchive: false,
      maxSize: "20m",
      maxFiles: "15d"
    }),
    new winston.transports.Console({

      level: "info"
    }),
  ]
});

export default logman;