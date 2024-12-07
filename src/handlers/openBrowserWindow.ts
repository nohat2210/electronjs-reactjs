import { BrowserWindow, IpcMainInvokeEvent, IpcMainEvent } from "electron";

export default function openBrowserWindow(
  event: IpcMainEvent | IpcMainInvokeEvent,
  url: string
) {
  const newWindow = new BrowserWindow({
    width: 400,
    height: 600,
  });

  // config changing info browser
  // ...

  newWindow.loadURL(url);
  newWindow.webContents.openDevTools();
}
