import styled from 'styled-components';

const selectedColor = '#5678de'

export const Wrapper = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  flex-grow: 1;
  overflow: auto;

  > ol {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    > li {
      font-size: 30px;
      margin: 3px;
      width: 40px;
      height: 40px;
      justify-self: center;
      text-align: center;
      align-content: center;
      padding-top: 4px;
      border-radius: 50%;
      color: #676767;

      &.selected {
        background: #e5e5e5;
        color: ${selectedColor};
      }

      .icon {
        fill: ${selectedColor};
        font-size: 35px;

      }
    }
  }


`