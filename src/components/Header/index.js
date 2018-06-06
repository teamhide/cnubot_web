import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }
    }
    _toggleSwitch = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }
    _renderToggle = () => {
        return (
            <div className="mobile-menu">
                <NavLink to="/" onClick={this._toggleSwitch}>메뉴</NavLink>
                <NavLink to="/about" onClick={this._toggleSwitch}>소개</NavLink>
                <NavLink to="/lotto" onClick={this._toggleSwitch}>추천</NavLink>
                <NavLink to="/honbab" onClick={this._toggleSwitch}>단무지</NavLink>
                <NavLink to="/chat" onClick={this._toggleSwitch}>채팅</NavLink>
            </div>
        )
    }
    render() {
        const { toggle } = this.state;
        return (
            <header>
                <div className="pc-menu">
                    <div className="header-logo">
                        <NavLink to="/">HIGHFAIV</NavLink>
                        <span onClick={this._toggleSwitch}>&#9776;</span>
                    </div>
                    <div className="header-menu">
                        <NavLink to="/">메뉴</NavLink>
                        <NavLink to="/about">소개</NavLink>
                        <NavLink to="/lotto">추천</NavLink>
                        <NavLink to="/honbab">단무지</NavLink>
                        
                    </div>
                </div>
                { toggle ? this._renderToggle() : "" }
            </header>
        );
    }
}

export default index;