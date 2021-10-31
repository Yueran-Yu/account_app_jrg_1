import styled from "styled-components";
import React from 'react';

const Label = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  padding-right: 10px;

  > span {
    margin: 0 10px 0 6px;
    white-space: nowrap;

    .icon {
      fill: #5678de;
    }
  }

  input {
    display: block;
    width: 100%;
    background: none;
    border: none;

    ::placeholder {
      color: #bebebe;
      font-size: 15px;
      font-family: "Arial Narrow", serif;
    }
  }
`

export const InputForm: React.FC = () => {

	return (
		<Label>
			<span>Note</span>
			<input type='text' placeholder='note here'/>
		</Label>
	)
}