import qGen from "./qGen";

export default function persInsertAll(
  persons: [name: string, username: string, chromozome: string][]
) {
  const qName = "pers.insert-all.q.sql";
  const sql: string[] = [];
  for (const [name, username, chromozome] of persons) {
    const q = `
insert into pers(name, appuser_id, chromozome)
  select '${name}', id, '${chromozome}' from appuser au
  where au.username = '${username}';
`;
    sql.push(q);
  }
  const query = `
begin
${sql.join("\n")}
end;
`;
  return qGen(query, qName);
}
