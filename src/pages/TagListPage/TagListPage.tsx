import React, {useContext, useState} from "react";
import {IconType} from "react-icons";
import {
	GiClothes, GiForkKnifeSpoon, GiScooter, GiBabyBottle, GiFruitBowl,
	GiSittingDog, GiCat, GiPaperClip, GiSofa, GiLipstick, GiTwirlyFlower,
	GiGamepad, GiIsland, GiPill, GiLoveInjection, GiRunningShoe
} from "react-icons/gi";
import {TiSocialTwitter, TiSocialLinkedin, TiSocialFacebook, TiSocialGithub, TiSocialYoutube} from "react-icons/ti";
import {
	RiWaterFlashFill,
	RiToolsFill,
	RiPoliceCarFill,
	RiHotelLine,
	RiHospitalLine,
	RiMoneyCnyCircleLine,
	RiHeartsFill,
	RiRunLine,
	RiBookOpenFill
} from "react-icons/ri";
import {
	MdPayment, MdWifiCalling, MdBuild, MdLocalDrink, MdNoDrinks,
	MdCommute, MdFastfood, MdEmojiFoodBeverage, MdLocalMovies,
	MdDinnerDining, MdCardGiftcard, MdMiscellaneousServices, MdHouse,
	MdOutlineEmail, MdSignalWifiStatusbarConnectedNoInternet2, MdOutlineCameraAlt,
	MdOutlineFlightTakeoff, MdLibraryMusic, MdSubway, MdOutlineArrowBackIos,
	MdCreditCard, MdSportsBasketball, MdSportsFootball, MdFitnessCenter, MdOutlineIcecream,
	MdOutlineChildFriendly, MdOutlineBrush
} from "react-icons/md";

import {useHistory} from 'react-router-dom';
import {BackBtn, TagWrapper, Wrapper} from "./TagListPage.style";
import {generateRandomNumber, TagListContext} from "../../context/TagListContext/TagListProvider";

const icons: IconType[] = [MdPayment, MdWifiCalling, MdBuild, MdLocalDrink,
	MdCommute, MdFastfood, MdEmojiFoodBeverage, MdLocalMovies, MdNoDrinks,
	MdDinnerDining, MdCardGiftcard, GiClothes, MdMiscellaneousServices, RiWaterFlashFill,
	MdHouse, RiToolsFill, RiPoliceCarFill, RiHotelLine, MdOutlineEmail,
	MdSignalWifiStatusbarConnectedNoInternet2, GiForkKnifeSpoon, GiScooter, GiFruitBowl,
	RiHospitalLine, MdOutlineCameraAlt, TiSocialTwitter, TiSocialLinkedin, TiSocialFacebook,
	TiSocialGithub, TiSocialYoutube, GiSittingDog, GiCat, GiSofa, GiLipstick, MdOutlineFlightTakeoff,
	RiMoneyCnyCircleLine, GiGamepad, GiIsland, GiPill, MdLibraryMusic, GiLoveInjection, MdSubway,
	MdCreditCard, MdSportsBasketball, MdSportsFootball, MdFitnessCenter, RiHeartsFill, MdOutlineIcecream,
	RiRunLine, RiBookOpenFill, GiTwirlyFlower, GiPaperClip, GiBabyBottle, MdOutlineChildFriendly, MdOutlineBrush,
	GiRunningShoe]

const IconsList = icons.map(Icon => {
	return ({id: generateRandomNumber(), tag: <Icon/>})
})

const TagListPage = () => {
	// const randomColor = () => ('hsl(' + Math.floor(Math.random() * 500.508) + ',50%,65%)')
	const [selectedTag, setSelectedTag] = useState<MyTag>()
	const {tags, onAddTags} = useContext(TagListContext) as TagListContextType
	let history = useHistory()

	const onSubmitNewTag = () => {
		if (selectedTag === undefined) {
			alert('Please select one tag and submit.')
		} else {
			const existTag = tags.find(t => t.id === selectedTag.id)
			if(existTag){
				alert('This tag already exists, please select a different tag.')
			}else{
				onAddTags(selectedTag)
				history.goBack()
			}
		}
	}

	return (
		<Wrapper>
			<div>
				<BackBtn onClick={() => history.goBack()}>
					<MdOutlineArrowBackIos className='back_icon'/>
				</BackBtn>
				<button onClick={onSubmitNewTag}>OK</button>
			</div>
			<TagWrapper>
				{
					IconsList.map(c =>
						<li key={c.id}
								onClick={() => setSelectedTag(c)}
								className={selectedTag === undefined ?
									'' :
									(selectedTag.id === c.id ? 'selected' : '')}>
							{c.tag}
						</li>)
				}
			</TagWrapper>
		</Wrapper>
	)
}

export default TagListPage;

