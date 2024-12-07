// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";
import { FormValues } from "@/renderer/modules/profile/components/ProfileForm";
import { Profile } from "@/types";

const electronHandler = {
  openBrowserWindow: (url: string) =>
    ipcRenderer.send("open-browser-window", url),
  saveProfile: async (data: FormValues) => {
    const result = await ipcRenderer.invoke("save-profile", data);
    return result;
  },
  getProfiles: async (): Promise<Profile[]> => {
    const profiles = await ipcRenderer.invoke("get-profiles");
    return profiles as Profile[];
  },
};

contextBridge.exposeInMainWorld("electron", electronHandler);

export type ElectronHandler = typeof electronHandler;
