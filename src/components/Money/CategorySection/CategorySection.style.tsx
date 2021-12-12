import styled from 'styled-components';

export const mainColor = ' #5678de';
export const Wrapper = styled.section`
  font-size: 14px;
  margin: 10px auto;
  display: inline-flex;

  > .roundCorner {
    border-radius: 5px;
    border: 0.5px solid ${mainColor};
    display: flex;
    justify-content: center;

    > div {
      text-align: center;
      padding: 6px 10px;
      color: ${mainColor};
      border-radius: 3px;

      &.selected {
        background: ${mainColor};
        color: white;
      }
    }
  }
`