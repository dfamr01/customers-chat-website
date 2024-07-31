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

export function setEnv(buildEnv) {
  const res = pickEnv(buildEnv);
  console.log("setEnv", res);
  console.log("import.meta", import.meta);
  console.log("import.meta.env", import.meta.env);
  Object.assign(ENV_VARS, res);
}
