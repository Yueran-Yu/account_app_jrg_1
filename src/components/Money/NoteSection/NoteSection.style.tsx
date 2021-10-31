import styled from 'styled-components';
import {mainColor} from "../CategorySection/CategorySection.style";

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  width: 80%;

  > span {
    margin-right: 6px;
    white-space: nowrap;

    .icon {
      fill: ${mainColor};
    }
  }

  input {
    display: block;
    width: 100%;
    background: none;
    border: none;

    ::placeholder {
      color: #bebebe;
      font-family: "Arial Narrow",serif;
    }
  }
`