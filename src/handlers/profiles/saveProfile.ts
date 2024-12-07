import fs from "fs";
import path from "path";
import { promisify } from "util";
import { app, IpcMainEvent, IpcMainInvokeEvent } from "electron";
import { FormValues } from "@/renderer/modules/profile/components/ProfileForm";

export default async function saveProfile(
  event: IpcMainEvent | IpcMainInvokeEvent,
  data: FormValues
) {
  const profileDir = path.join(app.getPath("userData"), "Profile");
  const filePath = path.join(profileDir, "Profile.json");
  const writeFileAsync = promisify(fs.writeFile);
  const readFileAsync = promisify(fs.readFile);

  if (!fs.existsSync(profileDir)) {
    fs.mkdirSync(profileDir, { recursive: true });
  }
  try {
    let profiles: FormValues[] = [];
    if (fs.existsSync(filePath)) {
      const fileContent = await readFileAsync(filePath, "utf-8");
      profiles = JSON.parse(fileContent);
    }
    profiles.push(data);
    await writeFileAsync(filePath, JSON.stringify(profiles, null, 2));
    return {
      success: true,
      message: `Profile saved successfully!`,
    };
  } catch (error) {
    return {
      success: false,
      message: "Error saving profile",
      error: error.message,
    };
  }
}
