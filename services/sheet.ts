import axios from 'axios'
import {SheetsDimension, SHEET_ID, SHEET_KEY} from '../utils/constants'
import {transformItemsData, transformPageData} from './transformers'

const fetchSheetsData = async (
	tabName: string,
	cellRange: string,
	majorDimension: SheetsDimension,
) => {
	return await axios.get(
		`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${tabName}!${cellRange}?majorDimension=${majorDimension}&key=${SHEET_KEY}`,
	)
}

export const getItems = async () => {
	const {data} = await fetchSheetsData('items', 'A2:E', SheetsDimension.ROWS)
	const allItems = transformItemsData(data.values)
	return allItems.filter(item => item.isActive)
}

export const getPageData = async () => {
	const {data} = await fetchSheetsData(
		'site',
		'B1:B21',
		SheetsDimension.COLUMNS,
	)
	return transformPageData(data.values[0])
}
