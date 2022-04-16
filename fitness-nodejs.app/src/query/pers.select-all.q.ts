import qGen from "./qGen";

export default function persSelectAll() {
  const qName = "pers.select-all.q.sql";
  const query =
`
select * from pers 
`;
return qGen(query, qName);
}