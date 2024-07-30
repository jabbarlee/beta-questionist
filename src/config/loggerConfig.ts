import { createLogger, format, transports } from "winston";
const { combine, timestamp, label, prettyPrint } = format;

export const logger = createLogger({
    level: 'info',
    format: format.cli(),
    transports: [
        new transports.Console()
    ],
});