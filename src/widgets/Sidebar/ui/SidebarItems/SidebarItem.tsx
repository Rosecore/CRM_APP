import { useState } from 'react';
import { LinkProps } from 'react-router-dom';
import { LinkItem } from 'shared/ui/LinkItem/LinkItem';
import { SidebarItemType } from 'widgets/Sidebar/model/item';
import './SidebarItem.scss';

interface SidebarItemProps extends LinkProps {
    item: SidebarItemType,
    collapsabple?: boolean
}
export const SidebarItem = ({ item, collapsabple }: SidebarItemProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const onClickCollapsable = () => {
        setCollapsed(!collapsed)
    }
    if (collapsabple) {
        return (
            <>
                <div className="item" onClick={onClickCollapsable}>
                    <item.icon className='icon' />
                    <span className='link'>
                        {(item.text)}
                    </span>
                    {collapsed && <div>{">"}</div>}
                </div>
                <div className={collapsed ? 'collapsed' : 'collapsed-items'}>
                    {item.itemsMap?.map(el => (
                        <LinkItem el={el} />
                    ))}
                </div>
            </>)
    }
    else return (
        <div>
            <LinkItem el={item} />
        </div>
    );
};
