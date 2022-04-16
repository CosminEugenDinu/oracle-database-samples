import qGen from "../query/qGen";
import { tDir } from "../const/q-path";

export default function fitnessAddFk() {
  const qName = "fitness.add-fk.sql";
  const query =
`
alter table fitness
  add constraint fitness2pers_id_fk
    foreign key (pers_id)
    references pers(id)
  add constraint fitness2sport_id_fk
    foreign key (sport_id)
    references sport(id)
`
  return qGen(query, qName, tDir);
}