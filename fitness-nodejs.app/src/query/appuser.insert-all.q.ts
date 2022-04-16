import crypto from "crypto";
import qGen from "./qGen";

export default function appuserInsertAll(usernames: string[]) {
  const qName = "appuser.insert-all.q.sql";
  const sql: string[] = [];
  for (const username of usernames) {
    const pass = crypto.createHash("md5").update(username).digest("hex");
    const q = `insert into appuser(username, pass) values ('${username}', '${pass}');`;
    sql.push(q);
  }
  const query = `
begin
${sql.join("\n")}
end;
`;
  return qGen(query, qName);
}
