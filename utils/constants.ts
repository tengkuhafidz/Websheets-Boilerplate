export interface Item {
	title: string
	tags: string[]
	imageUrl: string
	destinationUrl: string
	isActive: boolean
}

export interface SiteData {
	// GENERAL
	logoUrl: string
	themeColor: string
	darkMode: boolean
	// NAVBAR
	navButtonText: string
	navButtonUrl: string
	navMenuText: string
	navMenuUrl: string
	//HERO
	heroTitle: string
	heroDescription: string
	//FOOTER
	copyrightText: string
	footerText: string
	footerLinkableText: string
	footerLinkableUrl: string
	//SEO
	seoTitle: string
	seoDescription: string
	seoBannerUrl: string
}

export const defaultSiteData = {
	// GENERAL
	logoUrl: "/images/logo.png",
	themeColor: "green",
	darkMode: false,
	// NAVBAR
	navButtonText: "Treat The Dev",
	navButtonUrl: "https://buymeacoffee.com/sohafidz",
	navMenuText: "Documentation",
	navMenuUrl: "https://docs.websheets.co",
	//HERO
	heroTitle: "Build websites with just Google Sheets",
	heroDescription: "This is an open-sourced project that let's you build websites simply by filling in a Google Sheets template. No accounts, no dashboards, no fees!",
	//FOOTER
	copyrightText: "© WebSheets 2021",
	footerText: "This project was developed by",
	footerLinkableText: "Tengku Hafidz",
	footerLinkableUrl: "https://tengkuhafidz.com",
	//SEO
	seoTitle: "Websheets",
	seoDescription: "Build websites with just Google Sheets",
	seoBannerUrl: "/images/banner.png"
}

export enum SheetsDimension {
	ROWS = 'ROWS',
	COLUMNS = 'COLUMNS',
}

export const SHEET_ID = process.env.SHEET_ID
export const SHEET_KEY = process.env.SHEET_KEY
