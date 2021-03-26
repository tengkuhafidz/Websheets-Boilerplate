export default function ItemsList({items}) {
	const renderItems = () => {
		return items.map((item, index) => <div key={index}></div>)
	}

	return <div>{renderItems()}</div>
}
