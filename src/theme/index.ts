import { palette } from "./palette";
import { typography } from "./typography";
import { createButtonStyles } from "./components/button";

export const createTheme = (isDarkTheme: boolean) => {
  const button = createButtonStyles(isDarkTheme);
  return {
    palette,
    typography,
    components: {
      button,
    },
  } as const;
};
