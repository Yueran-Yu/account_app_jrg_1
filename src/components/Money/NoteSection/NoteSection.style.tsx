import styled from 'styled-components';

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 10px;
  height: 40px;

  > label {
    width: 10%;
    display: block;
    margin-right: 10px;

    .note {

      white-space: nowrap;
      font-size: 30px;
      color: #585757;
    }
  }

  input {
    width: 100%;
    background: none;
    font-size: 20px;
    line-height: 30px;
    border: none;
    height: 30px;

    ::placeholder {
      color: #bebebe;
      font-family: "Arial Narrow", serif;
    }
  }
`