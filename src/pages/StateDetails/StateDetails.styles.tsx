import styled from "styled-components";

export const StateDetailsWrapper = styled.div`
  text-align: center;
  background-color: white;
  height: 100vh;
  position: relative;

  .qqq {
    background-color: #7a9cff;
    padding: 20px 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 0 2px 8px;
    position: relative;

    .icon {
      width: 50px;
      height: 50px;
      font-size: 45px;
      background-color: #ffffff;
      color: #7a9cff;
      justify-content: center;
      padding-top: 3px;
      border-radius: 50%;
      box-shadow: rgba(0, 0, 0, 0.15) 2px 2px 3.2px;
    }

    .back_icon {
      color: white;
      position: absolute;
      left: 30px;
      top: 30px;
      font-size: 30px;
    }
  }

  form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: start;
    font-size: 18px;
    color: #929292;


    label {
      margin: 25px 0;
      padding-left: 20px;
      box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
      display: flex;
      flex-direction: row;
      align-items: center;

      .label-name {
        width: 80px;
        display: block;
        text-align: end;
      }

      .display-category {
        font-size: 20px;
        margin-left: 15px;
        margin-right: 30px;
        border: none;
        height: 40px;
        line-height: 40px;
        width: 100%;
        color: #454545;
        font-family: inherit;
      }

      .no-edit {
        color: #bababa;
      }

      .date {
        border: none;
        color: #bababa;
        font-size: 18px;
        font-family: inherit;
      }
    }

    .ddd {
      display: flex;
      flex-direction: row;
      width: 100vw;
      justify-content: space-around;
      align-items: end;
      position: absolute;
      bottom: 60px;
    }
  }
`
