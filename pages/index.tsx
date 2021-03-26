import {GetStaticProps} from 'next'
import React from 'react'
import ItemsList from '../components/Home/items-list'
import Layout from '../components/Layout'
import {getItems, getSiteData} from '../services/sheet'
import {SiteDataProvider} from '../utils/SiteDataContext'

export default function Index({siteData, items}) {
	return (
		<SiteDataProvider value={siteData}>
			<div className={siteData.darkMode ? 'dark' : ''}>
				<Layout>
					<ItemsList items={items} />
				</Layout>
			</div>
		</SiteDataProvider>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const items = await getItems()
	const siteData = await getSiteData()

	return {
		props: {
			siteData,
			items,
		},
	}
}
