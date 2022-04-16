import qGen from "../query/qGen";
import { tDir } from "../const/q-path";

export default function dropTbAll() {
  const query =
`
begin
  execute immediate 'drop table appuser cascade constraints';
  execute immediate 'drop table sport cascade constraints';
  execute immediate 'drop table pers cascade constraints';
  execute immediate 'drop table email cascade constraints';
  execute immediate 'drop table addr cascade constraints';
  execute immediate 'drop table fitness cascade constraints';
  exception when others then null;
end;
`;
  const qName = "drop-all-tb.sql";
  return qGen(query, qName, tDir);
}
