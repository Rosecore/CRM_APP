import { RoutePath } from "shared/config/rounteConfig/routeConfig"
import CalendarIcon from "shared/icons/Calendar.svg"
import SearchIcon from "shared/icons/search.svg"
import TableIcon from "shared/icons/vs_tables.svg"
import ExitIcon from "shared/icons/Exit.svg"
import SettingsIcon from "shared/icons/Settings.svg"
import LocatorIcon from "shared/icons/Locator.svg"
import TVIcon from "shared/icons/TV.svg"
import MainPageIcon from "shared/icons/mainPage.svg"
import SettingFirstIcon from "shared/icons/Settings_1.svg"
import SettingSecondIcon from "shared/icons/Settings_2.svg"


export interface SidebarItemType extends ItemType {
    collapsable?: boolean,
    itemsMap?: ItemType[]
}

export interface ItemType {
    path: string,
    text: string,
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemList: SidebarItemType[] =
    [{
        path: RoutePath.main,
        text: "Главная",
        icon: MainPageIcon,
    },
    {
        text: "Поиск адресов",
        icon: SearchIcon,
        path: RoutePath.address,
    },
    {
        text: "Таблицы",
        path: 'a',
        icon: TableIcon,
    },
    {
        text: "Календарь",
        path: 'b',
        icon: CalendarIcon,
    },
    {
        text: "Карты",
        path: 'c',
        icon: LocatorIcon,
    },
    {
        path: 'd',
        text: "Виджеты",
        icon: TVIcon,
    },
    {
        text: "Настройки",
        path: '',
        icon: SettingsIcon,
        collapsable: true,
        itemsMap: [
            {
                text: "Настройки профиля",
                path: 'i',
                icon: SettingFirstIcon,
            },
            {
                text: "Управление финансами",
                path: 'f',
                icon: SettingSecondIcon,
            },
        ]
    },
    {
        text: "Выход",
        path: 'g',
        icon: ExitIcon,
    },
    ]
