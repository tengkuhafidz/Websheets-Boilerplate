interface Colors {
	hoverTextColor: string
	bgColor: string
	hoverBgColor: string
  ringColor: string
}

export const getColors = (color: string): Colors => {
	switch (color) {
		case 'green':
			return {
				hoverTextColor: 'hover:text-green-600',
				bgColor: 'bg-green-600',
				hoverBgColor: 'hover:bg-green-800',
        ringColor: 'ring-green-500'
			}
		case 'blue':
			return {
				hoverTextColor: 'hover:text-blue-500',
				bgColor: 'bg-blue-500',
				hoverBgColor: 'hover:bg-blue-600',
        ringColor: 'ring-blue-500'
			}
		case 'purple':
			return {
				hoverTextColor: 'hover:text-purple-600',
				bgColor: 'bg-purple-600',
				hoverBgColor: 'hover:bg-purple-700',
        ringColor: 'ring-purple-500'
			}
		case 'pink':
			return {
				hoverTextColor: 'hover:text-pink-400',
				bgColor: 'bg-pink-400',
				hoverBgColor: 'hover:bg-pink-500',
        ringColor: 'ring-pink-500'
			}
	}
}
