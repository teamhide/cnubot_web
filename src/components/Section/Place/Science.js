import React, { Component } from 'react';
import './Science.css';
import Menubox from '../Menubox';

class Science extends Component {
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
        window.scrollTo(0, 0)
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
        return fetch("http://api.highfaiv.kr/menu/science/?format=json")
        .then(response => response.json())
        .catch(err => console.log("Connection fail"))
    }
    _renderMenuBox = () => {
        var arr = [];
        var forLoopDay = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
        arr.push(<Menubox menu={this.state.menuArr[this.state.today]} place="생활과학대학"/>);
        for(var i = this.state.today + 1; i <= 6; i++) {
            arr.push(<Menubox menu={this.state.menuArr[i]} key={i} day={forLoopDay[i]} place="생활과학대학"/>);
        }
        return arr
    }
    render() {
        return (
            <div className="section-science">
                { this._renderMenuBox() }
            </div>
        );
    }
}

export default Science;