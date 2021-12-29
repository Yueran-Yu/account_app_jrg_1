import styled from 'styled-components';
import {mainColor} from "../CategorySection/CategorySection.style";

export const DateWrapper = styled.div`
  & .date {
    text-align: center;
    float: right;
    width: 80%;
    color: ${mainColor};
    border: 0.5px solid ${mainColor};
    margin-top: 5px;
    margin-right: 5px;
    border-radius: 3px;
		height: 25px;
		font-size: 15px;
    font-weight: 700;
    padding: 0 5px;
  }
	
	
`