const info = (message: string, code?: number) => {
  console.log(message);
};

const error = (message: string, code?: number) => {
  console.log(message);
};

const warn = (message: string, code?: number) => {
  console.log(message);
};

export const debug = (message: string, code?: number) => {
  console.log(message);
};

const log = (message: string, code?: number) => {
  console.log(message);
};

export const Logger = {
  info,
  error,
  warn,
  debug,
  log,
};
