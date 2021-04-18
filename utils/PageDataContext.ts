import {createContext} from 'react'
import {defaultPageData} from './constants'

const PageDataContext = createContext(defaultPageData)
export const PageDataProvider = PageDataContext.Provider
export default PageDataContext
