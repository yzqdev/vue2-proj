const os = require(`os`);
const getIPAdress = () => {
  let localIPAddress = ``;
  let interfaces = os.networkInterfaces();
  for (let devName in interfaces) {
    console.log(devName);
    let iface = interfaces[devName];
    for (let i = 0; i < iface.length; i++) {
      let alias = iface[i];
      if (
        alias.family === `IPv4` &&
        alias.address !== `127.0.0.1` &&
        !alias.internal
      ) {
        localIPAddress = alias.address;
      }
    }
  }
  return localIPAddress;
};

module.exports = { getIPAdress };
