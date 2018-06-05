import React, { Component } from 'react';
import './Home.css';
import Modal from './Modal';
import { NavLink } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            student2: '',
            student3: '',
            sangrok: '',
            science: '',
            dormitory: '',
            numToDay: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
        }
    }
    modalSwitch = (place) => {
        this.setState({
            modalVisible: !this.state.modalVisible,
            place: place
        });
    }
    componentDidMount() {
        var day = new Date();
        var today = day.getDay();
        this._getMenu(this.state.numToDay[today]);
    }
    _getMenu = async (day) => {
        const menu = await this._callApi(day);
        try {
            this.setState({
                dormitory: menu[0][day],
                sangrok: menu[1][day],
                science: menu[2][day],
                student2: menu[3][day],
                student3: menu[4][day],
            })
        } catch(error) {
            console.log("MENU API ERROR");
        }
    }
    _callApi = (day) => {
        return fetch("http://api.highfaiv.kr/menu/?format=json")
        .then(response => response.json())
        .catch(err => console.log("Connection fail"))
    }
    render() {
        const { modalVisible, student2, student3, sangrok, science, dormitory } = this.state;
        return (
            <div className="section-home">
                { modalVisible ? <Modal place={this.state.place} closeFunc={this.modalSwitch} /> : "" }
                <div className="menubox">
                    <div className="menubox-header">
                        <NavLink to="/student2">제2학생회관</NavLink>
                        <span onClick={() => this.modalSwitch("제2학생회관")}>운영시간</span>
                    </div>
                    <div className="menubox-date">
                        2018년 5월 16일
                    </div>
                    <div className="menubox-body">
                        { student2 ? student2.split('\n').map( line => {
                                    return (<span>{line}<br/></span>)})
                        : "식단 없음"}
                    </div> 
                </div>
                <div className="menubox">
                    <div className="menubox-header">
                    <NavLink to="/student3">제3학생회관</NavLink>
                        <span onClick={() => this.modalSwitch("제3학생회관")}>운영시간</span>
                    </div>
                    <div className="menubox-body">
                    { student3 ? student3.split('\n').map( line => {
                                    return (<span>{line}<br/></span>)})
                        : "식단 없음"}
                    </div> 
                </div>
                <div className="menubox">
                    <div className="menubox-header">
                        <NavLink to="/sangrok">상록회관</NavLink>
                        <span onClick={() => this.modalSwitch("상록회관")}>운영시간</span>
                    </div>
                    <div className="menubox-body">
                    { sangrok ? sangrok.split('\n').map( line => {
                                    return (<span>{line}<br/></span>)})
                        : "식단 없음"}
                    </div> 
                </div>
                <div className="menubox">
                    <div className="menubox-header">
                        <NavLink to="/science">생활과학대학</NavLink>
                        <span onClick={() => this.modalSwitch("생활과학대학")}>운영시간</span>
                    </div>
                    <div className="menubox-body">
                    { science ? science.split('\n').map( line => {
                                    return (<span>{line}<br/></span>)})
                        : "식단 없음"}
                    </div> 
                </div>
                <div className="menubox">
                    <div className="menubox-header">
                    <NavLink to="/student1">제1학생회관</NavLink>
                        <span onClick={() => this.modalSwitch("제1학생회관")}>운영시간</span>
                    </div>
                    <div className="menubox-body">
                        식단 없음
                    </div> 
                </div>
                <div className="menubox">
                    <div className="menubox-header">
                    <NavLink to="/dormitory">기숙사</NavLink>
                        <span onClick={() => this.modalSwitch("기숙사")}>운영시간</span>
                    </div>
                    <div className="menubox-body menubox-dorm">
                    { dormitory ? dormitory.split('\n').map( line => {
                                    return (<span>{line}<br/></span>)})
                        : "식단 없음"}
                    </div> 
                </div>
            </div>
        );
    }
}

export default Home;