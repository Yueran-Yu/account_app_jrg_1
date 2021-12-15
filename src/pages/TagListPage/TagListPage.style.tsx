import styled from "styled-components";

export const Wrapper = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    background-color: #eeeeee;
    padding: 6px 0;
    align-items: center;

    button {
      border: none;
      font-size: 20px;
      height: 30px;
      width: 45px;
      line-height: 30px;
      font-weight: 0.1;
      color: #ffffff;
      background-color: #5678de;
      margin-right: 20px;
      border-radius: 3px;
    }
  }
`

export const BackBtn = styled.div`
  margin-left: 20px;
  color: #5678de;

  .back_icon {
    font-size: 25px;
    font-weight: 800;
  }
`

export const TagWrapper = styled.ol`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  li {
    font-size: 30px;
    margin-top: 10px;
    text-align: center;
    justify-self: center;
    color: #5d5c5c;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding-top: 5px;
  }
`
