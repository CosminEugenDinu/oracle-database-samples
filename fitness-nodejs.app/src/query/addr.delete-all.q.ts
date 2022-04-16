import qGen from "./qGen";

export default function addrDeleteAll() {
  const qName = "addr.delete-all.q.sql";
  const query = `
delete from addr
`;
  return qGen(query, qName);
}

