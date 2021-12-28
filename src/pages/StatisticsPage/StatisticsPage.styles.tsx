import styled from "styled-components";

export const StatisticsWrapper = styled.div`
  text-align: center;
  background: white;


  .category-bg {
    background: #f3f3f3;
    padding-bottom: 4px;
    margin-bottom: 20px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;

    @media screen and (min-width: 770px) {
      width: 498px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .final-statistics {
    padding-top: 16vh;
    padding-bottom: 20px;

    .title {
      position: relative;
      margin: 20px auto;
    }

    .charts {
      height: 50vh;
      left: 10px;
      right: 10px;
      width: 200vw;
      overflow: scroll;
      background-color: #f6f6f6;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }


`