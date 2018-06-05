import React, { Component } from 'react';
import './Dormitory.css';
import Menubox from './Menubox';

class Dormitory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            today: '',
            mon: '',
            tue: '',
            wed: '',
            thu: '',
            fri: '',
            sat: '',
            sun: '',
            menuArr: [],
            dayArr: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
        }
    }
    componentDidMount() {
        var day = new Date();
        var today = day.getDay();
        this.setState({
            today: today
        })
        this._getMenu();
    }
    _getMenu = async () => {
        const menu = await this._callApi();
        this.setState({
            mon: menu['mon'],
            tue: menu['tue'],
            wed: menu['wed'],
            thu: menu['thu'],
            fri: menu['fri'],
            sat: menu['sat'],
            sun: menu['sun']
        })
        let copyArr = this.state.menuArr.slice(); //creates the clone of the state
        for(var i = 0; i <= 6; i++) {
            copyArr[i] = menu[this.state.dayArr[i]];
        }
        this.setState({menuArr: copyArr});
    }
    _callApi = () => {
        return fetch("http://api.highfaiv.kr/menu/dormitory/?format=json")
        .then(response => response.json())
        .catch(err => console.log("Connection fail"))
    }
    _renderMenuBox = () => {
        var arr = [];
        var forLoopDay = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
        arr.push(<Menubox menu={this.state.menuArr[this.state.today]}  place="기숙사"/>);
        for(var i = this.state.today + 1; i <= 6; i++) {
            arr.push(<Menubox menu={this.state.menuArr[i]} key={i} day={forLoopDay[i]} place="기숙사"/>);
        }
        return arr
    }
    render() {
        const { mon, tue, wed, thu, fri, sat, sun } = this.state;
        return (
            <div className="section-dormitory">
                { this._renderMenuBox() }
            </div>
        );
    }
}

export default Dormitory;