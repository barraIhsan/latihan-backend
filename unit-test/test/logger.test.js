import winston from "winston";

const logger = winston.createLogger({
  level: "silly",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.ms(),
    winston.format.json(),
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.file({ filename: "app.log" }),
    new winston.transports.file({ filename: "error.log", level: "error.log" }),
    new DailyRotateFile({
      filename: "rotated-%DATE%.log",
      datepattern: "YYYY-MM-DD HH:mm:ss",
      zippedArchive: true,
      maxSize: "10k",
      maxFiles: "30d",
    }),
  ],
});

test("test logger", () => {
  logger.log({ level: "info", message: "Hello logger" });
});
