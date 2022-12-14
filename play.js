
const { connect } = require("./client.js");
const { setupInput } = require("./input");

const connection = connect();

console.log("Connecting ...");


setupInput(connection);


