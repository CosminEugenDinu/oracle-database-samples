import qGen from "../query/qGen";
import { tDir } from "../const/q-path";

export default function sportCreateTb() {
  const qName = "sport.create-tb.sql";
  const query =
`
create table sport(
  id number generated always as identity constraint sport_pk primary key,
  name varchar2(100)
  )
`;
  return qGen(query, qName, tDir);
}
