import qGen from "./qGen";

export default function sportSelectAll() {
  const qName = "sport.select-all.q.sql";
  const query =
`
select * from sport
`;
return qGen(query, qName);
}