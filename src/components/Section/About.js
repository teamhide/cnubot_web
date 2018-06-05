import React, { Component } from 'react';
import './About.css';
import KakaoBotImg1 from '../../img/cnubot.png';
import KakaoBotImg2 from '../../img/cnubot2.png';

class About extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="section-about">
                <div className="about-left">
                    <img src={KakaoBotImg1} alt="img1" />
                    <img src={KakaoBotImg2} alt="img2" />
                </div>
                <div className="about-right">
                    <span>본 서비스는 충남대학교 학식을 알려주는 서비스입니다.</span>
                    <span>편하게 웹으로 확인할수도 있을 뿐만 아니라</span>
                    <span>카카오톡 플러스친구를 통해서도 사용할 수 있습니다.</span>
                    <span>아래의 링크를 통해 만나보세요!</span>
                    <span><a href="https://pf.kakao.com/_Ifxerxl" target="_blank" rel="noopener noreferrer">충남대학식알림봇 친구추가</a></span>
                </div>
            </div>
        );
    }
}

export default About;