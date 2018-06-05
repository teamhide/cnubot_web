import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

class index extends Component {
    render() {
        return (
            <header>
                <div className="pc-menu">
                    <div className="header-logo">
                        <NavLink to="/">CNUBAB</NavLink>
                        <label for="toggle">&#9776;</label>
                    </div>
                    <div className="header-menu">
                        <NavLink to="/">메뉴</NavLink>
                        <NavLink to="/about">소개</NavLink>
                        <NavLink to="/lotto">추천</NavLink>
                        <NavLink to="/honbab">단무지</NavLink>
                    </div>
                </div>
                <input type="checkbox" id="toggle" />
                <div className="mobile-menu">
                    <NavLink to="/">메뉴</NavLink>
                    <NavLink to="/about">소개</NavLink>
                    <NavLink to="/lotto">추천</NavLink>
                    <NavLink to="/honbab">단무지</NavLink>
                </div>
            </header>
        );
    }
}

export default index;