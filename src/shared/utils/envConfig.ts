export const ENV_VARS = {
  VITE_API_SERVER: "http://localhost:3000",
  VITE_WEBSOCKET_SERVER: "http://localhost:3000",
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
  console.log("🚀 ~ pickEnv ~ obj:", obj);
  const res = picker(obj, ENV_VARS);
  return res;
}

export function setEnv() {
  const res = pickEnv(import.meta.env);

  Object.assign(ENV_VARS, res);
}
setEnv();
// setEnv({
//   VITE_API_SERVER:
//     "https://customers-support-bh7no.ondigitalocean.app/customers-chat-server2",
//   VITE_WEBSOCKET_SERVER:
//     "https://customers-support-bh7no.ondigitalocean.app/customers-chat-server2",
// });
