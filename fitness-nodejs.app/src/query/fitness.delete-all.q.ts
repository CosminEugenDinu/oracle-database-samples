import qGen from "./qGen";

export default function fitnessDeleteAll() {
  const qName = "fitness.delete-all.q.sql";
  const query = `
delete from fitness
`;
  return qGen(query, qName);
}

