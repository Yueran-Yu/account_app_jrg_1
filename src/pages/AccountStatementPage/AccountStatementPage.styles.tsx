import styled from "styled-components";

export const AccountWrapper = styled.div`
  text-align: center;
  background-color: white;

  .category-bg {
    background: hsla(0, 0%, 92%, 0.45);
    padding-bottom: 4px;
    margin-bottom: 20px;
  }

  .final-state {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    color: #565656;

    .date {
      border-bottom: 1px solid #cfcfcf;
      padding-bottom: 5px;
      margin-bottom: 10px;
      text-align: start;
      font-size: 13px;
      color: #8c8c8c;
      box-shadow: rgba(24, 24, 24, 0.1) 0 1px 2px 0;
    }

    .icon-wrapper {
      display: flex;
      justify-content: space-between;
      padding: 5px 20px;
      line-height: 25px;
      font-size: 18px;

      .icon-note {
        display: flex;
        flex-direction: row;

        .icon {
          margin-right: 10px;
          width: 25px;
          height: 25px;
          background-color: #708fe7;
          justify-content: center;
          padding-top: 3px;
          color: white;
          border-radius: 50%;
        }
      }
    }

    .icon-wrapper:hover {
      background: hsl(240, 100%, 99%);
      opacity: 0.8;
      transition: 0.3s;
			cursor: pointer;

      .icon {
        background-color: #2f61f1;
      }
    }
  }
`