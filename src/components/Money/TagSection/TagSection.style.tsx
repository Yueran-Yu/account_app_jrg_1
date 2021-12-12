import styled from 'styled-components';

const selectedColor = '#5678de'

export const Wrapper = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  flex-grow: 1;
  overflow: auto;

  > ol {
    margin: 0 -12px;

    > li {
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;

      &.selected {
        background: ${selectedColor};
        color: #ffffff;
        border: none;
      }
    }
  }

  .icon {
    fill: ${selectedColor};
    font-size: 30px;
  }
`