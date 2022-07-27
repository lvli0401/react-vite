import type { SizeType } from 'antd/lib/config-provider/SizeContext'

/* themeConfigProp */
export interface ThemeConfigProp {
	primary: string
	isDark: boolean
	weakOrGray: string
}

/* GlobalState */
export interface GlobalState {
	token: string
	userInfo: any
	assemblySize: SizeType
	language: string
	themeConfig: ThemeConfigProp
}

/* MenuState */
export interface MenuState {
	isCollapse: boolean
	menuList: Menu.MenuOptions[]
}

/* TabsState */
export interface TabsState {
	tabsActive: string
	tabsList: Menu.MenuOptions[]
}

/* BreadcrumbState */
export interface BreadcrumbState {
	breadcrumbList: {
		[key: string]: any
	}
}

/* AuthState */
export interface AuthState {
	authButtons: {
		[propName: string]: any
	}
	authRouter: string[]
}
