import qGen from "./qGen";

export default function emailDeleteAll() {
  const qName = "email.delete-all.q.sql";
  const query = `
delete from email
`;
  return qGen(query, qName);
}

