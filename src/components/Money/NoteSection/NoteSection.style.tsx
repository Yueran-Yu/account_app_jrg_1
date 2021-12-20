import styled from 'styled-components';

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 10px;

  > label {
    width: 100%;
    display: flex;

    .note {
      margin-right: 6px;
      white-space: nowrap;
      font-size: 20px;
      color: #585757;
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