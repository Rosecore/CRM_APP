import { memo } from 'react';
import { SidebarItemList } from 'widgets/Sidebar/model/item';
import { SidebarItem } from '../SidebarItems/SidebarItem';
import './Sidebar.scss';

export const Sidebar = memo(() => {

    return (
        <aside className='sidebar'>
            <nav className='sidebar_items'>
                {SidebarItemList.map((item) => (
                    <SidebarItem
                        key={item.text}
                        item={item}
                        collapsabple={item.collapsable}
                        to={item.path} />
                ))}
            </nav>
        </aside>
    );
});
