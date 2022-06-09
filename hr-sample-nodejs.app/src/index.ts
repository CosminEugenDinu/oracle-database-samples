import { qRun } from "./qRun";

async function main() {
  const result = await qRun('select * from jobs');
  console.log(result);
}

main();
