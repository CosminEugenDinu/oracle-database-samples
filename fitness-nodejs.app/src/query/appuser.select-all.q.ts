import qGen from "./qGen";

export default function appuserSelectAll() {
  const qName = "appuser.select-all.q.sql";
  const query =
`
select * from appuser
`;
return qGen(query, qName);
}