import styled from 'styled-components';
import {mainColor} from "../CategorySection/CategorySection.style";

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
	margin-left: 10px;

  > label {
    width: 100%;
    display: flex;

    > span {
      margin-right: 6px;
      white-space: nowrap;

      .icon {
        fill: ${mainColor};
      }
    }

    input {
      width: 100%;
      background: none;
      border: none;

      ::placeholder {
        color: #bebebe;
        font-family: "Arial Narrow", serif;
      }
    }
  }
`