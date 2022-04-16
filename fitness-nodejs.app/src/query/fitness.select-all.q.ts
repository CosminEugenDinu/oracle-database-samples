import qGen from "./qGen";

export default function fitnessSelectAll() {
  const qName = "fitness.select-all.q.sql";
  const query =
`
select * from fitness
`;
return qGen(query, qName);
}