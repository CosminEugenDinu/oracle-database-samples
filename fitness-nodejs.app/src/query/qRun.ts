import oracledb from "oracledb";
import { Connection } from "oracledb";
const dbConfig = require("../../dbconfig.js");

export default async function qRun(query?: string) {
  if (!query) {
    console.log("no query");
    return;
  }
  let connection: Connection | undefined;
  try {
    connection = await oracledb.getConnection(dbConfig);
    console.log("Successfully connected to Oracle Database");
    const result = await connection.execute(query, [], {
      resultSet: true,
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });
    console.log("Executed query:\n", "\x1b[31m", query, "\x1b[0m");
    connection.commit();

    const rs: any = result.resultSet;
    let row: any;
    if (rs) {
      while ((row = await rs.getRow())) {
        console.log(row);
      }
      await rs.close();
    }
  } catch (err) {
    console.log(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.log(err);
      }
    }
  }
}
