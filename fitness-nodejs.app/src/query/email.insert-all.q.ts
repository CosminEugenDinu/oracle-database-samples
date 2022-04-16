import qGen from "./qGen";

export default function emailInsertAll(
  emails: [email: string, name: string][]
) {
  const qName = "email.insert-all.q.sql";
  const sql: string[] = [];
  for (const [email, name] of emails) {
    const q = `
insert into email(pers_id, email)
  select id, '${email}' from pers p
  where p.name = '${name}'
  and rownum = 1;
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
