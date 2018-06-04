import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

class index extends Component {
    render() {
        return (
            <header>
                <div className="header-logo">
                    <NavLink to="/">CNUBAB</NavLink>
                </div>
                <div className="header-menu">
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/about">ABOUT</NavLink>
                </div>
            </header>
        );
    }
}

export default index;