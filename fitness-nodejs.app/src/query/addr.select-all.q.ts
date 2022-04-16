import qGen from "./qGen";

export default function addrSelectAll() {
  const qName = "addr.select-all.q.sql";
  const query =
`
select * from addr
`;
return qGen(query, qName);
}