import qGen from "./qGen";

export default function emailSelectAll() {
  const qName = "email.select-all.q.sql";
  const query =
`
select * from email
`;
return qGen(query, qName);
}