import axios from 'axios'
import {
	defaultSiteData,
	Item,
	SheetsDimension,
	SHEET_ID,
	SHEET_KEY,
	SiteData,
} from '../utils/constants'

export const getItems = async () => {
	const {data} = await fetchSheetsData('items', 'A2:E', SheetsDimension.ROWS)
	const allItems = transformItemsData(data.values)
	return allItems.filter(item => item.isActive)
}

const fetchSheetsData = async (
	tabName: string,
	cellRange: string,
	majorDimension: SheetsDimension,
) => {
	return await axios.get(
		`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${tabName}!${cellRange}?majorDimension=${majorDimension}&key=${SHEET_KEY}`,
	)
}

const transformItemsData = (itemValues: any[]): Item[] => {
	return itemValues.map(itemValue => ({
		title: itemValue[0],
		tags: itemValue[1]?.split(','),
		imageUrl: itemValue[2],
		destinationUrl: itemValue[3],
		isActive: itemValue[4] === 'TRUE',
	}))
}

export const getSiteData = async () => {
	const {data} = await fetchSheetsData(
		'site',
		'B1:B21',
		SheetsDimension.COLUMNS,
	)
	return transformSiteData(data.values[0])
}

const transformSiteData = (siteDataValue: any[]): SiteData => ({
	// GENERAL
	logoUrl: siteDataValue[1] || defaultSiteData.logoUrl,
	themeColor: siteDataValue[2]?.toLowerCase() || defaultSiteData.themeColor,
	darkMode: siteDataValue[3] === 'TRUE',
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
