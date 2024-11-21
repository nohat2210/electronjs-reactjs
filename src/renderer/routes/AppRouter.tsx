import { RouterProvider } from "react-router-dom";
import AppProvider from "../contexts/AppContext";
import { routes } from "./router";

export default function AppRouter() {
  return (
    <AppProvider>
      <RouterProvider router={routes} />
    </AppProvider>
  );
}
