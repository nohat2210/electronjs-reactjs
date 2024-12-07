import fs from "fs";
import path from "path";
import { promisify } from "util";
import { app } from "electron";

export default async function getProfiles() {
  const profileDir = path.join(app.getPath("userData"), "Profile");
  const filePath = path.join(profileDir, "Profile.json");
  const readFileAsync = promisify(fs.readFile);

  try {
    if (!fs.existsSync(filePath)) {
      return [];
    }
    const fileContent = await readFileAsync(filePath, "utf-8");
    const profiles = JSON.parse(fileContent);
    return profiles;
  } catch (error) {
    console.error("Error reading profiles:", error);
    return [];
  }
}
