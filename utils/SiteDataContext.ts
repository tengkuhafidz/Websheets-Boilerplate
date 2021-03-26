import React from "react";
import { defaultSiteData } from "./constants";

const SiteDataContext = React.createContext(defaultSiteData);
export const SiteDataProvider = SiteDataContext.Provider
export default SiteDataContext

