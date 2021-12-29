import {
	RiWaterFlashFill, RiToolsFill,
	RiPoliceCarFill, RiHotelLine, RiHospitalLine, RiMoneyCnyCircleLine,
	RiHeartsFill, RiRunLine, RiBookOpenFill, RiGiftLine, RiCopyleftLine, RiCustomerServiceLine,
	RiMailCheckFill, RiPencilRuler2Line, RiScissorsFill, RiDatabase2Line, RiClipboardLine, RiAuctionFill, RiCoinsFill,
	RiGift2Line, RiHandCoinLine, RiMoneyDollarCircleLine, RiShoppingCart2Line, RiTrophyFill, RiLungsLine,
	RiEBike2Line, RiVirusLine, RiGobletLine, RiPoliceCarLine, RiRestaurantFill, RiTruckLine, RiMovie2Line,RiUser5Line, RiTeamLine,RiGroupLine,RiEmotionHappyLine
} from "react-icons/ri";


import {IconType} from "react-icons";
import generateRandomNumber from "./IdGenerator";
import React from "react";

export const ExpenseIcons: IconType[] = [RiWaterFlashFill, RiToolsFill,
	RiPoliceCarFill, RiHotelLine, RiHospitalLine, RiMoneyCnyCircleLine,
	RiHeartsFill, RiRunLine, RiBookOpenFill, RiGiftLine, RiCopyleftLine, RiCustomerServiceLine,
	RiMailCheckFill, RiPencilRuler2Line, RiScissorsFill, RiDatabase2Line, RiClipboardLine, RiAuctionFill, RiCoinsFill,
	RiGift2Line, RiHandCoinLine, RiMoneyDollarCircleLine, RiShoppingCart2Line, RiTrophyFill, RiLungsLine, RiEBike2Line,
	RiVirusLine, RiGobletLine, RiPoliceCarLine, RiRestaurantFill, RiTruckLine, RiMovie2Line,RiUser5Line, RiTeamLine,RiGroupLine,RiEmotionHappyLine]


export const IncomeIcons: IconType[] = [RiCoinsFill,
	RiGift2Line, RiHandCoinLine, RiMoneyDollarCircleLine, RiScissorsFill, RiDatabase2Line, RiClipboardLine, RiAuctionFill, RiShoppingCart2Line, RiGiftLine, RiWaterFlashFill
	, RiToolsFill, RiPoliceCarFill, RiHotelLine, RiPoliceCarLine]


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
