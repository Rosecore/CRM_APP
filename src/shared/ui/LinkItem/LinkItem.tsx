import React from 'react';
import { NavLink } from 'react-router-dom';
import { ItemType } from 'widgets/Sidebar/model/item';
import "./LinkItem.scss"

interface LinkItemProps {
    el: ItemType
}
export const LinkItem = ({ el }: LinkItemProps) => {
    return (
        <NavLink to={el.path}
            className={({ isActive }) => isActive ? "active item" : "unactive item"}>
            <el.icon className='icon' />
            <span className='link'>
                {(el.text)}
            </span>
        </NavLink>
    );
};