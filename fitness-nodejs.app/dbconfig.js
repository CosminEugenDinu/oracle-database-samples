const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "./.env"),
});

const dbHost = process.env.ORA_DB_HOST;
const dbPort = process.env.ORA_DB_PORT;
const dbName = process.env.ORA_DB_NAME;

const user = process.env.ORA_DB_USER_NAME;
const password = process.env.ORA_DB_USER_PASS;
const connectionString = `${dbHost}:${dbPort}/${dbName}`;

module.exports = { user, password, connectionString };
