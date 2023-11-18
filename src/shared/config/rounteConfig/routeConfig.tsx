import { MainPage } from "pages/mainPage"
import { AdressPage } from "pages/adressPage"
import { RouteProps } from "react-router-dom"


export enum AppRoutes {
    main = "main",
    address = "address",

}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.main]: '/',
    [AppRoutes.address]: '/address',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.main]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.address]: {
        path: RoutePath.address,
        element: <AdressPage />
    },
   
}