import {SHEET_ID} from '../utils/constants'

export default () => null

export const getServerSideProps = async context => {
	return {
		redirect: {
			destination: `https://docs.google.com/spreadsheets/d/${SHEET_ID}/edit#gid=0`,
			permanent: false,
		},
	}
}
