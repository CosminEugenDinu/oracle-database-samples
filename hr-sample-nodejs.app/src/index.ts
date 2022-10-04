import { Q_userTables } from "./introspect/userTables.query";
import { qRun } from "./qRun";

async function main() {
  const result = await qRun(Q_userTables());
  console.log(result);
}

main();
