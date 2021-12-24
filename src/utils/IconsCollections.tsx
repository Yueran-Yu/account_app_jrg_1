import {TiSocialTwitter, TiSocialLinkedin, TiSocialFacebook, TiSocialGithub, TiSocialYoutube} from "react-icons/ti";

import {
	GiClothes, GiForkKnifeSpoon, GiScooter, GiBabyBottle, GiFruitBowl,
	GiCat, GiPaperClip, GiSofa, GiLipstick, GiTwirlyFlower,
	GiGamepad, GiIsland, GiPill, GiLoveInjection, GiRunningShoe
} from "react-icons/gi";

import {
	RiWaterFlashFill,
	RiToolsFill,
	RiPoliceCarFill,
	RiHotelLine,
	RiHospitalLine,
	RiMoneyCnyCircleLine,
	RiHeartsFill,
	RiRunLine,
	RiBookOpenFill, RiGiftLine,
} from "react-icons/ri";

import {
	MdPayment, MdWifiCalling, MdBuild, MdLocalDrink, MdNoDrinks,
	MdCommute, MdFastfood, MdEmojiFoodBeverage, MdLocalMovies,
	MdDinnerDining, MdCardGiftcard, MdMiscellaneousServices, MdHouse,
	MdOutlineEmail, MdSignalWifiStatusbarConnectedNoInternet2, MdOutlineCameraAlt,
	MdOutlineFlightTakeoff, MdLibraryMusic, MdSubway,
	MdCreditCard, MdSportsBasketball, MdSportsFootball, MdFitnessCenter, MdOutlineIcecream,
	MdOutlineChildFriendly, MdOutlineBrush
} from "react-icons/md";

import {IconType} from "react-icons";
import generateRandomNumber from "./IdGenerator";
import React from "react";

export const ExpenseIcons: IconType[] = [MdWifiCalling, MdBuild, MdLocalDrink,
	MdCommute, MdFastfood, MdEmojiFoodBeverage, MdLocalMovies, MdNoDrinks,
	MdDinnerDining, MdCardGiftcard, GiClothes, MdMiscellaneousServices, RiWaterFlashFill,
	MdHouse, RiToolsFill, MdPayment, RiPoliceCarFill, RiHotelLine, MdOutlineEmail,
	MdSignalWifiStatusbarConnectedNoInternet2, GiForkKnifeSpoon, GiScooter, GiFruitBowl,
	RiHospitalLine, MdOutlineCameraAlt, TiSocialTwitter, TiSocialLinkedin, TiSocialFacebook,
	TiSocialGithub, TiSocialYoutube, GiCat, GiSofa, GiLipstick, MdOutlineFlightTakeoff,
	RiMoneyCnyCircleLine, GiGamepad, GiIsland, GiPill, MdLibraryMusic, GiLoveInjection, MdSubway,
	MdCreditCard, MdSportsBasketball, MdSportsFootball, MdFitnessCenter, RiHeartsFill, MdOutlineIcecream,
	RiRunLine, RiBookOpenFill, GiTwirlyFlower, GiPaperClip, RiGiftLine, GiBabyBottle, MdOutlineChildFriendly, MdOutlineBrush,
	GiRunningShoe]


export const IncomeIcons: IconType[] = [
	MdPayment, RiGiftLine, GiClothes, MdMiscellaneousServices, RiWaterFlashFill,
	MdHouse, RiToolsFill, MdPayment, RiPoliceCarFill, RiHotelLine, MdOutlineEmail,
	MdSignalWifiStatusbarConnectedNoInternet2, GiForkKnifeSpoon, GiScooter, GiFruitBowl,
	RiHospitalLine, MdOutlineCameraAlt, TiSocialTwitter, TiSocialLinkedin, TiSocialFacebook,
	TiSocialGithub, TiSocialYoutube, GiCat, GiSofa, GiLipstick, MdOutlineFlightTakeoff]


export const IncomeIconsHashMap: HashMapType = IncomeIcons.reduce((result: {}, Icon: IconType) => {
	return {...result, [Icon.name]: <Icon/>}
}, {})

export const ExpenseIconsHashMap: HashMapType = ExpenseIcons.reduce((result: {}, Icon: IconType) => {
	return {...result, [Icon.name]: <Icon/>}
}, {})


export const TagsListGenerator = (icons: IconType[]) => {
	return icons.map((Icon) => {
			return {id: generateRandomNumber(), tag: Icon.name}
		}
	)
}

export const isTagExist = (tags: MyTag[], selectedTag: MyTag) => tags.find(t => t.id === selectedTag.id || t.tag === selectedTag.tag)
