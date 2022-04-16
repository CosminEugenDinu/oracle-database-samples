import qGen from "../query/qGen";
import { tDir } from "../const/q-path";

export default function emailCreateTb() {
  const qName = "email.create-tb.sql";
  const query = `
create table email(
  id number generated always as identity constraint email_pk primary key,
  pers_id number,
  email varchar2(100) unique
)
`;
  return qGen(query, qName, tDir);
}
