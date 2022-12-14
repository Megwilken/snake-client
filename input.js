const { MOVE_UP, MOVE_LEFT, MOVE_DOWN, MOVE_RIGHT, MESS, MESSG, MESSH, MESSY, NAME  } = require("./constants");

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write(MOVE_UP);
  }
  if (key === 'a') {
    connection.write(MOVE_LEFT);
  }
  if (key === 's') {
    connection.write(MOVE_DOWN);
  }
  if (key === 'd') {
    connection.write(MOVE_RIGHT);
  }
  if (key === 'g') {
    connection.write(MESS + MESSG);
  }
  if (key === 'h') {
    connection.write(MESS + MESSH);
  }
  if (key === 'y') {
    connection.write(MESS + MESSY);
  }
  return handleUserInput;
};

module.exports = {
  setupInput
};