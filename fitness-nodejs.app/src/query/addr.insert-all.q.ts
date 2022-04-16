import qGen from "./qGen";

export default function addrInsertAll(
  addresses: [addr: string, persName: string][]
) {
  const qName = "addr.insert-all.q.sql";
  const sql: string[] = [];
  for (const [addr, persName] of addresses) {
    const q = `
insert into addr(pers_id, addr)
  select id, '${addr}' from pers p 
  where p.name = '${persName}'
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
