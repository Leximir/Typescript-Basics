export {};

type LogLevel = "INFO" | "WARNING" | "ERROR";

type LogEntry = [string, Date, LogLevel];

const serverLogs: LogEntry[] = [
    ["Desila se greska 222", new Date('2025-01-01 00:02:05'), "INFO"]
];