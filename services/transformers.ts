import {defaultPageData, Item, PageData} from '../utils/constants'

const stringToBoolean = (field: string) => field === 'TRUE'
const stringToArray = (field: string) => field?.split(',')
const toLowercase = (field: string) => field?.toLowerCase()

export const transformItemsData = (itemValues: any[]): Item[] => {
	return itemValues.map((itemValue, index) => ({
		id: index,
		title: itemValue[0],
		tags: stringToArray(itemValue[1]),
		imageUrl: itemValue[2],
		destinationUrl: itemValue[3],
		isActive: stringToBoolean(itemValue[4]),
	}))
}

export const transformPageData = (pageDataValue: any[]): PageData => ({
	// GENERAL
	logoUrl: pageDataValue[1] || defaultPageData.logoUrl,
	themeColor: toLowercase(pageDataValue[2]) || defaultPageData.themeColor,
	darkMode: stringToBoolean(pageDataValue[3]),
	// NAVBAR
	navButtonText: pageDataValue[5],
	navButtonUrl: pageDataValue[6],
	navMenuText: pageDataValue[7],
	navMenuUrl: pageDataValue[8],
	//HERO
	heroTitle: pageDataValue[10],
	heroDescription: pageDataValue[11],
	//FOOTER
	copyrightText: pageDataValue[13],
	footerText: pageDataValue[14],
	footerLinkableText: pageDataValue[15],
	footerLinkableUrl: pageDataValue[16],
	//SEO
	seoTitle: pageDataValue[18] || defaultPageData.seoTitle,
	seoDescription: pageDataValue[19] || defaultPageData.seoDescription,
	seoBannerUrl: pageDataValue[20] || defaultPageData.seoBannerUrl,
})
