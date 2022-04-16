import fs from "fs/promises";
import path from "path";

export default async function qSave(
  query: string,
  qName: string,
  qDir: string,
) {
  const qPath = path.join(qDir, qName);
  const fileHandle = await fs.open(qPath, "w");
  console.log("Writing query: ");
  console.log("\x1b[34m", query, "\x1b[0m");
  console.log("To file: ", qPath);
  try {
    await fileHandle.write(query, null, "utf-8");
    return query;
  } catch (err) {
    console.log(err);
  } finally {
    await fileHandle.close();
  }
}
