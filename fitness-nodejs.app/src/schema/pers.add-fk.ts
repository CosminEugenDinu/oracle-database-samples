import qGen from "../query/qGen";
import { tDir } from "../const/q-path";

export default function persAddFk() {
  const qName = "pers.add-fk.sql";
  const query =
`
alter table pers
  add constraint pers2user_id
    foreign key (appuser_id)
    references appuser(id)
`;
  return qGen(query, qName, tDir);
}
