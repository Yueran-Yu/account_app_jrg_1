import {Layout} from "../components/Layout";
import React from "react";
import {CategorySection} from "../components/Money/CategorySection/CategorySection";
import {NumberPadSection} from "../components/Money/NumberSection/NumberPadSection";
import {TagsSection} from "../components/Money/TagSection/TagSection";
import {NoteSection} from "components/Money/NoteSection/NoteSection";
import styled from "styled-components";
import {DateSection} from "../components/Money/DateSection/DateSection";

const NoteDate = styled.section`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;

  .dateSection {
    display: flex;
    align-items: center;
  }
`

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

const Money = () => {
	return (
		<MyLayout>
			<CategorySection/>
			<TagsSection/>
			<NoteDate>
				<NoteSection/>
				<DateSection/>
			</NoteDate>
			<NumberPadSection/>
		</MyLayout>
	)
}

export default Money;