import styled from "styled-components";
import {Layout} from "../../components/Layout";

export const NoteDateWrapper = styled.section`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;

  .dateSection {
    display: flex;
    align-items: center;
  }
`

export const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`