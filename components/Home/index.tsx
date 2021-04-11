import React, {useState} from 'react'
import {Item} from '../../utils/constants'
import {getFuseSearchResult} from '../../utils/search'
import ItemsList from './items-list'
import Searchbar from './searchbar'

interface Props {
	items: Item[]
}

export default function Home({items}: Props) {
	const [searchTerm, setSearchTerm] = useState('')

	const searchResults: Item[] = searchTerm
		? getFuseSearchResult(items, searchTerm, ['title'])
		: items

	return (
		<div>
			<div className="text-center max-w-xl mx-auto py-2">
				<Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			</div>
			<ItemsList items={searchResults} />
		</div>
	)
}
