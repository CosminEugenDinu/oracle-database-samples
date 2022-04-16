import qGen from "../query/qGen";
import { tDir } from "../const/q-path";

export default function fitnessCreateTb() {
  const qName = "fitness.create-tb.sql";
  const query = `
create table fitness(
  id number generated always as identity constraint fitness_pk primary key,
  day date,
  duration number(5),
  pers_id number,
  sport_id number
)
`;
  return qGen(query, qName, tDir);
}
