import {createContext} from 'react'
import {defaultSiteData} from './constants'

const SiteDataContext = createContext(defaultSiteData)
export const SiteDataProvider = SiteDataContext.Provider
export default SiteDataContext
