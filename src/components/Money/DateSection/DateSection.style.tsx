import styled from 'styled-components';
import {mainColor} from "../CategorySection/CategorySection.style";

export const Wrapper = styled.div`
  & .date {
    text-align: center;
    float: right;
    width: 80%;
    color: ${mainColor};
    border: 0.5px solid ${mainColor};
    margin-right: 5px;
    border-radius: 5px 5px 5px 5px;
    font-weight: 700;
    padding: 0 5px;
  }
`