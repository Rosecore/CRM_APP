import { memo } from 'react';
import './Navbar.scss'
import CompanyLogo from 'shared/icons/ic_logo.svg'
import PersonIcon from 'shared/icons/ic_person.svg'

export const Navbar = memo(() => {

    return (
        <header className='navbar'>
            <span className='left-side'>
            <CompanyLogo/><h3>Wrench CRM</h3>
            </span>
            <span className='right-side'>
            <PersonIcon/><h3>Имя Фамилия</h3>
            </span>


        </header>
    );
});
