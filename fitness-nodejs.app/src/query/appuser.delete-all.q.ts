import qGen from "./qGen";

export default function appuserDeleteAll() {
  const qName = "appuser.delete-all.q.sql";
  const query = `
delete from appuser
`;
  return qGen(query, qName);
}

