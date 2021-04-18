import {GetStaticProps} from 'next'
import React from 'react'
import Home from '../components/Home'
import Layout from '../components/Layout'
import {getItems, getPageData} from '../services/sheet'
import {PageDataProvider} from '../utils/PageDataContext'

export default function Index({pageData, items}) {
	return (
		<PageDataProvider value={pageData}>
			<div className={pageData.darkMode ? 'dark' : ''}>
				<Layout>
					<Home items={items} />
				</Layout>
			</div>
		</PageDataProvider>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const items = await getItems()
	const pageData = await getPageData()

	return {
		props: {
			pageData,
			items,
		},
	}
}
