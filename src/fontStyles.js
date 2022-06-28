import { createGlobalStyle } from "styled-components";
import RobotoBold from "../src/assets/fonts/Roboto/Roboto-Bold.ttf";

const FontStyles = createGlobalStyle`

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBold}) format('ttf'),
  }
`;

export default FontStyles;