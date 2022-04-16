import qGen from "./qGen";

export default function sportDeleteAll() {
  const qName = "sport.delete-all.q.sql";
  const query = `
delete from sport
`;
  return qGen(query, qName);
}

