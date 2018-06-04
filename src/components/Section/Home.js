import React, { Component } from 'react';
import './Home.css';
import Modal from './Modal';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            place: ''
        }
    }
    modalSwitch = (place) => {
        this.setState({
            modalVisible: !this.state.modalVisible,
            place: place
        });
    }
    componentDidMount() {
        this._getMenu();
    }
    _getMenu = () => {
    }
    _callApi = () => {
        fetch("http://api.highfaiv.kr/menu/?format=json", {
            headers: {'Access-Control-Allow-Origin': '*'}
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }
    render() {
        const { modalVisible } = this.state;
        return (
            <div className="section-home">
                { modalVisible ? <Modal place={this.state.place} closeFunc={this.modalSwitch} /> : "" }
                <div className="menubox">
                    <div className="menubox-header">
                        <span>제2학생회관</span>
                        <span onClick={() => this.modalSwitch("제2학생회관")}>운영시간</span>
                    </div>
                    <div className="menubox-body">
                        식단 없음
                    </div> 
                </div>
                <div className="menubox">
                    <div className="menubox-header">
                        <span>제3학생회관</span>
                        <span onClick={() => this.modalSwitch("제3학생회관")}>운영시간</span>
                    </div>
                    <div className="menubox-body">
                        식단 없음
                    </div> 
                </div>
                <div className="menubox">
                    <div className="menubox-header">
                        <span>상록회관</span>
                        <span onClick={() => this.modalSwitch("상록회관")}>운영시간</span>
                    </div>
                    <div className="menubox-body">
                        식단 없음
                    </div> 
                </div>
                <div className="menubox">
                    <div className="menubox-header">
                        <span>생활과학대학</span>
                        <span onClick={() => this.modalSwitch("생활과학대학")}>운영시간</span>
                    </div>
                    <div className="menubox-body">
                        식단 없음
                    </div> 
                </div>
                <div className="menubox">
                    <div className="menubox-header">
                        <span>제1학생회관</span>
                        <span onClick={() => this.modalSwitch("제1학생회관")}>운영시간</span>
                    </div>
                    <div className="menubox-body">
                        식단 없음
                    </div> 
                </div>
                <div className="menubox">
                    <div className="menubox-header">
                        <span>기숙사</span>
                        <span onClick={() => this.modalSwitch("기숙사")}>운영시간</span>
                    </div>
                    <div className="menubox-body">
                        식단 없음
                    </div> 
                </div>
            </div>
        );
    }
}

export default Home;