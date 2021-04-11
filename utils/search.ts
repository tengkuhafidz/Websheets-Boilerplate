import Fuse from 'fuse.js'

export const getFuseSearchResult = (
	items: any[],
	searchTerm: string,
	key: string[],
): any[] => {
	const options = {
		isCaseSensitive: false,
		findAllMatches: false,
		includeMatches: false,
		includeScore: false,
		useExtendedSearch: false,
		minMatchCharLength: 1,
		shouldSort: true,
		threshold: 0.4,
		location: 0,
		distance: 100,
		key,
	}

	const fuse = new Fuse(items, options)
	const fuseSearchResult = fuse.search(searchTerm)
	return fuseSearchResult.map(result => result.item)
}
