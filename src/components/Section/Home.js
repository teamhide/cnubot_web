import React, { Component } from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            today: new Date().toISOString().split('T')[0],
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
        window.scrollTo(0, 0)
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
        const { today, student2, student3, sangrok, science, dormitory } = this.state;
        return (
            <div className="section-home">
                {/*{ modalVisible ? <Modal place={this.state.place} closeFunc={this.modalSwitch} /> : "" }*/}
                <NavLink to="/student2" className="menubox">
                    <div className="menubox-header">
                        <NavLink to="/student2">제2학생회관</NavLink><span>오늘</span>
                    </div>
                    <div className="menubox-date">
                        <span><b>월 ~ 금</b> : 오전 11:30 ~ 오후 02:00 / <b>토 ~ 일</b> : 영업 안함</span>
                    </div>
                    <div className="menubox-body">
                        { student2 ? student2.split('\n').map( line => {
                                    return (<span>{line}<br/></span>)})
                        : "식단 없음"}
                    </div> 
                </NavLink>
                <NavLink to="/student3" className="menubox">
                    <div className="menubox-header">
                        <NavLink to="/student3">제3학생회관</NavLink><span>오늘</span>
                    </div>
                    <div className="menubox-date">
                        <span><b>월 ~ 금</b> : 오전 11:30 ~ 오후 02:00 / <b>토 ~ 일</b> : 영업 안함</span>
                    </div>
                    <div className="menubox-body">
                    { student3 ? student3.split('\n').map( line => {
                                    return (<span>{line}<br/></span>)})
                        : "식단 없음"}
                    </div> 
                </NavLink>
                <NavLink to="/sangrok" className="menubox">
                    <div className="menubox-header">
                        <NavLink to="/sangrok">상록회관</NavLink><span>오늘</span>
                    </div>
                    <div className="menubox-date">
                        <span><b>월 ~ 금</b> : 오전 11:30 ~ 오후 02:00 / <b>토 ~ 일</b> : 영업 안함</span>
                    </div>
                    <div className="menubox-body">
                    { sangrok ? sangrok.split('\n').map( line => {
                                    return (<span>{line}<br/></span>)})
                        : "식단 없음"}
                    </div> 
                </NavLink>
                <NavLink to="/science" className="menubox">
                    <div className="menubox-header">
                        <NavLink to="/science">생활과학대학</NavLink><span>오늘</span>
                    </div>
                    <div className="menubox-date">
                        <span><b>월 ~ 금</b> : 오전 11:30 ~ 오후 02:00 / <b>토 ~ 일</b> : 영업 안함</span>
                    </div>
                    <div className="menubox-body">
                    { science ? science.split('\n').map( line => {
                                    return (<span>{line}<br/></span>)})
                        : "식단 없음"}
                    </div> 
                </NavLink>
                <NavLink to="/dormitory" className="menubox">
                    <div className="menubox-header">
                    <NavLink to="/dormitory">기숙사</NavLink><span>오늘</span>
                    </div>
                    <div className="menubox-date">
                        <span><b>월 ~ 금</b> : 오전 07:00 ~ 오전 09:00</span><span className="dorm-time-margin">오전 11:30 ~ 오후 01:30 / 오후 05:30 ~ 오후 07:30</span>
                        <span><b>토 ~ 일</b> : 오전 07:30 ~ 오전 09:00</span><span>오전 11:30 ~ 오후 01:30 / 오후 05:30 ~ 오후 07:00</span>
                    </div>
                    <div className="menubox-body menubox-dorm">
                    { dormitory ? dormitory.split('\n').map( line => {
                                    return (<span>{line}<br/></span>)})
                        : "식단 없음"}
                    </div> 
                </NavLink>
                <NavLink to="/student1" className="menubox">
                    <div className="menubox-header">
                    <NavLink to="/student1">제1학생회관</NavLink><span>오늘</span>
                    </div>
                    <div className="menubox-date">
                        <span><b>월 ~ 금</b> : 오전 11:00 ~ 오후 07:00</span>
                        <span><b>토</b> : 오전 11:00 ~ 오후 02:00 / <b>일</b> : 영업 안함</span>
                    </div>
                    <div className="menubox-body">
                        식단 없음
                    </div> 
                </NavLink>
            </div>
        );
    }
}

export default Home;