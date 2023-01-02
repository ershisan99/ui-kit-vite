import "styled-components";
import { createTheme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends ReturnType<typeof createTheme> {}
}
