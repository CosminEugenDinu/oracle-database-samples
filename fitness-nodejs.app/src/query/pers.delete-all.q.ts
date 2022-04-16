import qGen from "./qGen";

export default function persDeleteAll() {
  const qName = "pers.delete-all.q.sql";
  const query = `
delete from pers
`;
  return qGen(query, qName);
}

