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
        }, () => console.log(this.state.toggle))
    }
    _renderToggle = () => {
        return (
            <div className="mobile-menu">
                <NavLink to="/" onClick={this._toggleSwitch}>메뉴</NavLink>
                <NavLink to="/about">소개</NavLink>
                <NavLink to="/lotto">추천</NavLink>
                <NavLink to="/honbab">단무지</NavLink>
            </div>
        )
    }
    render() {
        const { toggle } = this.state;
        return (
            <header>
                <div className="pc-menu">
                    <div className="header-logo">
                        <NavLink to="/">CNUBAB</NavLink>
                        <label htmlFor="toggle" onClick={this._toggleSwitch}>&#9776;</label>
                    </div>
                    <div className="header-menu">
                        <NavLink to="/">메뉴</NavLink>
                        <NavLink to="/about">소개</NavLink>
                        <NavLink to="/lotto">추천</NavLink>
                        <NavLink to="/honbab">단무지</NavLink>
                    </div>
                </div>
                <input type="checkbox" id="toggle" />
                { toggle ? this._renderToggle() : "" }
            </header>
        );
    }
}

export default index;