/// <reference types="@electron-forge/plugin-vite/forge-vite-env" />
import { ElectronHandler } from "./src/main/preload";

declare global {
  interface Window {
    electron: ElectronHandler;
  }
  const MAIN_WINDOW_VITE_DEV_SERVER_URL: string;
  const MAIN_WINDOW_VITE_NAME: string;
}

export {};
