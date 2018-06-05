import React, { Component } from 'react';
import './Science.css';

class Science extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mon: '',
            tue: '',
            wed: '',
            thu: '',
            fri: '',
            sat: '',
            sun: ''
        }
    }
    componentDidMount() {
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
    }
    _callApi = () => {
        return fetch("http://api.highfaiv.kr/menu/science/?format=json")
        .then(response => response.json())
        .catch(err => console.log("Connection fail"))
    }
    render() {
        const { mon, tue, wed, thu, fri, sat, sun } = this.state;
        return (
            <div className="section-science">
                <div className="menubox">
                    <div className="menubox-header">
                        생활과학대학<span>월요일</span>
                    </div>
                    <div className="menubox-body">
                        { mon ? mon.split('\n').map( line => {
                                    return (<span>{line}<br/></span>)})
                        : "식단 없음"}
                    </div>
                </div>
                <div className="menubox">
                    <div className="menubox-header">
                        생활과학대학<span>화요일</span>
                    </div>
                    <div className="menubox-body">
                        { tue ? tue.split('\n').map( line => {
                                    return (<span>{line}<br/></span>)})
                        : "식단 없음"}
                    </div>
                </div>
                <div className="menubox">
                    <div className="menubox-header">
                        생활과학대학<span>수요일</span>
                    </div>
                    <div className="menubox-body">
                        { wed ? wed.split('\n').map( line => {
                                    return (<span>{line}<br/></span>)})
                        : "식단 없음"}
                    </div>
                </div>
                <div className="menubox">
                    <div className="menubox-header">
                        생활과학대학<span>목요일</span>
                    </div>
                    <div className="menubox-body">
                        { thu ? thu.split('\n').map( line => {
                                    return (<span>{line}<br/></span>)})
                        : "식단 없음"}
                    </div>
                </div>
                <div className="menubox">
                    <div className="menubox-header">
                        생활과학대학<span>금요일</span>
                    </div>
                    <div className="menubox-body">
                        { fri ? fri.split('\n').map( line => {
                                    return (<span>{line}<br/></span>)})
                        : "식단 없음"}
                    </div>
                </div>
                <div className="menubox">
                    <div className="menubox-header">
                        생활과학대학<span>토요일</span>
                    </div>
                    <div className="menubox-body">
                        { fri ? fri.split('\n').map( line => {
                                    return (<span>{line}<br/></span>)})
                        : "식단 없음"}
                    </div>
                </div>
                <div className="menubox">
                    <div className="menubox-header">
                        생활과학대학<span>일요일</span>
                    </div>
                    <div className="menubox-body">
                        { sun ? sun.split('\n').map( line => {
                                    return (<span>{line}<br/></span>)})
                        : "식단 없음"}
                    </div>
                </div>
            </div>
        );
    }
}

export default Science;