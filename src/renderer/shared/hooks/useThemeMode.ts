import { ThemeContext, ThemeContextProps } from "../../contexts/ThemeContext";
import { useContext } from "react";

export const useThemeMode = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  return context;
};
