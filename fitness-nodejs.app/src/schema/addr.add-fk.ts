import qGen from "../query/qGen";
import { tDir } from "../const/q-path";

export default function addrAddFk() {
  const qName = "addr.add-fk.sql";
  const query =
`
alter table addr 
  add constraint addr2pers_id_fk
    foreign key (pers_id)
    references pers(id)
`
  return qGen(query, qName, tDir);
}