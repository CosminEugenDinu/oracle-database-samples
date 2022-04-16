import qGen from "../query/qGen";
import { tDir } from "../const/q-path";

export default function persCreateTb() {
  const qName = "pers.create-tb.sql";
  const query = `
create table pers(
  id number generated always as identity constraint pers_pk primary key,
  appuser_id number,
  name varchar(100),
  birth date default('01-JAN-1992'),
  chromozome char(1)
  )
`;
  return qGen(query, qName, tDir);
}
