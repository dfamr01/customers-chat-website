export const ENV_VARS = {
  API_SERVER: "http://localhost:3000",
  WEBSOCKET_SERVER: "http://localhost:3000",
};

function picker(obj, pickerObj) {
  const newObj = {};
  Object.keys(pickerObj).forEach((key) => {
    if (obj[key]) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
}

export function pickEnv(obj = {}) {
  const res = picker(obj, ENV_VARS);
  return res;
}

function setEnv() {
  const res = pickEnv(import.meta.env);
  Object.assign(ENV_VARS, res);
}

setEnv();
