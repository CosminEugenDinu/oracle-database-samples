import qGen from "../query/qGen";
import { tDir } from "../const/q-path";

export default function appuserCreateTb() {
  const qName = "appuser.create-tb.sql";
  const query = `
create table appuser(
  id number generated always as identity constraint appuser_pk primary key,
  username varchar2(100) unique, 
  pass varchar2(100)
)
`;
  return qGen(query, qName, tDir);
}
