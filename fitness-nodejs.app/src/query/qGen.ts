import {qDir} from "../const/q-path"
import qSave from "./qSave"
export default function qGen(query: string, qName: string, dir?: string) {
  return {
    async save() {
      return await qSave(query, qName, dir ?? qDir);
    },
  };
}