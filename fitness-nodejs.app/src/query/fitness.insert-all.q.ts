import qGen from "./qGen";

export default function fitnessInsertAll(
  fitnessList: [
    persName: string,
    date: string,
    sport: string,
    duration: number
  ][]) {
  const qName = "fitness.insert-all.q.sql";
  const sql: string[] = [];
  for (const [
    persName,
    date,
    sport,
    duration
  ] of fitnessList) {
    const q = `
insert into fitness(day, pers_id, sport_id, duration)
  select '${date}', p.id pers_id, s.id sport_id, ${duration} from pers p, sport s
    where p.name = '${persName}'
    and s.name = '${sport}'
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
