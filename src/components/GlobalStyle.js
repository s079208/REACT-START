import { createGlobalStyle } from "styled-components";
import reset from "reset-css";

export default createGlobalStyle`
  ${reset}

html {
    --color-background-prim: #2f2f2f;
    --color-background-sec: #5f5f5f;
    --color-accent-prim: #ff9505;
    --color-accent-sec: #e2711d;
    --color-text: #f2f2f2;
    }

h1 {
  color:red;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 18px;
}
`;
