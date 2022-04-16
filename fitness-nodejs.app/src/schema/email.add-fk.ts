import qGen from "../query/qGen";
import { tDir } from "../const/q-path";

export default function emailAddFk() {
  const qName = "email.add-fk.sql";
  const query =
`
alter table email
  add constraint email2pers_id_fk
    foreign key (pers_id)
    references pers(id)
`
  return qGen(query, qName, tDir);
}