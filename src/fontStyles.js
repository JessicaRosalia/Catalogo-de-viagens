import { createGlobalStyle } from "styled-components";
import RobotoBold from "../src/assets/fonts/Roboto/Roboto-Bold.ttf";

const FontStyles = createGlobalStyle`

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBold}) format('ttf'),
  }

  *, body{
    margin: 0;
    padding: 0;
}
`;

export default FontStyles;