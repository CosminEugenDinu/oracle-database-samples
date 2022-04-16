import qGen from "../query/qGen";
import { tDir } from "../const/q-path";

export default function addrCreateTb() {
  const qName = "addr.create-tb.sql";
  const query = `
create table addr(
  id number generated always as identity constraint addr_pk primary key,
  pers_id number,
  addr varchar2(1000)
)
`;
  return qGen(query, qName, tDir);
}
