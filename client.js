const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write("Name: MMW");
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 5000);
    // setTimeout(() => {
    //   conn.write("Move: left");
    // }, 7000);
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = {
  connect: connect,
};

