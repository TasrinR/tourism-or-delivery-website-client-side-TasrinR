import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth'
import './Header.css'

const Header = () => {
    const { user , handleSignOut } = useAuth()
    return (
        <div className="header">
            <nav>
                <NavLink to="/home">HOME</NavLink>
                {user?<NavLink to="/my-orders">MY ORDERS</NavLink>: ''}
                {user?<NavLink to="/manage-all-orders">MANAGE ALL ORDERS</NavLink>: ''}
                {user?<NavLink to="/add-service">ADD NEW SERVICE</NavLink>: ''}
                {
                    !user ? <NavLink to="/login">Login</NavLink> : <button style={{ color: 'steelblue' }} onClick={handleSignOut}>Logout</button>
                }
                <div style={{color: '#fff'}}>{user && user.displayName}</div>
            </nav>
        </div>
    );
};

export default Header;