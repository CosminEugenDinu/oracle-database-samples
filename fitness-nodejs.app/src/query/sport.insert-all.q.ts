import qGen from "./qGen";

export default function sportInsertAll(sports: string[]) {
  const qName = "sports.insert-all.q.sql";
  const sql: string[] = [];
  for (const sport of sports) {
    const q = `insert into sport(name) values('${sport}');`;
    sql.push(q);
  }
  const query = `
begin
${sql.join("\n")}
end;
`;
  return qGen(query, qName);
}