import oracledb from "oracledb";
import dbconfig from "./dbconfig";

export async function qRun (sql: string, bindParams?: oracledb.BindParameters, options?: oracledb.ExecuteOptions) {
  let conn: oracledb.Connection | undefined;
  try {
    conn = await oracledb.getConnection(dbconfig);
    const result = await conn.execute(sql, bindParams ?? [], options ?? {});
    return result;
  } catch (e) {
    console.log(e);
  } finally {
    await conn?.close();
  }
}