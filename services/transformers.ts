import {defaultSiteData, Item, SiteData} from '../utils/constants'

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

export const transformSiteData = (siteDataValue: any[]): SiteData => ({
	// GENERAL
	logoUrl: siteDataValue[1] || defaultSiteData.logoUrl,
	themeColor: toLowercase(siteDataValue[2]) || defaultSiteData.themeColor,
	darkMode: stringToBoolean(siteDataValue[3]),
	// NAVBAR
	navButtonText: siteDataValue[5],
	navButtonUrl: siteDataValue[6],
	navMenuText: siteDataValue[7],
	navMenuUrl: siteDataValue[8],
	//HERO
	heroTitle: siteDataValue[10],
	heroDescription: siteDataValue[11],
	//FOOTER
	copyrightText: siteDataValue[13],
	footerText: siteDataValue[14],
	footerLinkableText: siteDataValue[15],
	footerLinkableUrl: siteDataValue[16],
	//SEO
	seoTitle: siteDataValue[18] || defaultSiteData.seoTitle,
	seoDescription: siteDataValue[19] || defaultSiteData.seoDescription,
	seoBannerUrl: siteDataValue[20] || defaultSiteData.seoBannerUrl,
})
