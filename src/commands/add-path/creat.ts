import fs from "fs";
import { filePath } from "../../utils/jsonpath";

export function writeToJsonFile(data: PathEntry[]): void {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
  console.log("Path added successfully!");
}
