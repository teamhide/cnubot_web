import React, { Component } from 'react';
import './Honbab.css';
import { PacmanLoader } from 'react-spinners';

class Honbab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            lottoPlace: [
                '공대5호관 1층 화장실',
                '공대5호관 2층 화장실',
                '공대5호관 3층 화장실',
                '공대5호관 4층 화장실',
                '공대5호관 5층 화장실',
                '공대5호관 6층 화장실',
                '경상대 1층 화장실',
                '경상대 2층 화장실',
                '경상대 3층 화장실',
                '2학 화장실',
                '1학 인문대 방향 화장실',
                '1학 2층 서점 옆 화장실',
                '공대1호관 쪽문 쪽 화장실',
                '중앙도서관 1층 화장실',
                '교양관 1층 뒷쪽',
                '교양관 2층 화장실',
                '인문대 중앙복도에서 좌측으로 100m',
                '상록회관 1층 복도옆 화장실',
                '서문 운동장 스타디움 화장실',
                '정심화홀 1층 화장실',
                '공대5호관 옥상',
                '오늘도 혼밥하시나요? 오늘 하루는 용기 내어 친구들에게 먼저 다가가 보세요!',
                '교양관에서 학사마을 중간 쯤 풀 숲',
                '인재개발원 3층 계단 앞 화장실',
                '인재개발원 1층 화장실',
                '상록회관 2층 열람실 옆 화장실',
            ],
            recommend: '',
        }
    }
    _makeRandom(min, max){
        var RandVal = Math.random() * (max- min) + min;
        return Math.floor(RandVal);
    }
    _randomLoading = (place) => {
        setTimeout( () => {
            this.setState({
                recommend: place
            })
        }, 4000);
    }
    componentDidMount() {
        const { lottoPlace } = this.state;
        var randomNum = lottoPlace[this._makeRandom(1, lottoPlace.length-1)];
        this._randomLoading(randomNum);
    }
    render() {
        return (
            <div className="section-honbab">
                <div className="section-honbab-lotto">
                    <div className='sweet-loading'>
                    { this.state.recommend ? (
                        <span className="span-recommend">{this.state.recommend}</span>
                    ) : (
                        <PacmanLoader
                        color={'#63cca1'} 
                        loading={this.state.loading}
                        />
                    )}
                    </div>
                </div>
                <div className="section-honbab-text">
                    <span><b>단무지는</b> 화장실에서 빠르고 조용하게 한 끼를 해결하는 혼밥족에게 단무지는 최대의 적이라고 볼 수 있습니다. 씹는 소리가 크기 때문에 밖에 있는 사람에게 들킬 위험이 커지기 때문인데요. 여러분들을 위해 마음껏 소리 내며 식사할 수 있는 최적의 혼밥 장소를 추천해드립니다!</span>
                    <span><br /><b>혼밥은 부끄러운게 아닙니다! 편하게 혼밥하세요^^</b></span>
                    <a href="https://www.youtube.com/watch?v=ST9L7gBoj34" target="_blank" rel="noopener noreferrer">혼밥할 때 듣기 좋은 노래</a>
                </div>
            </div>
        );
    }
}

export default Honbab;