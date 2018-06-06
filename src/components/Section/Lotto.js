import React, { Component } from 'react';
import './Lotto.css';
import { HashLoader } from 'react-spinners';

class Lotto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            drink: '',
            food: '',
            foodPlace: [
                '아저씨', '한마음정육식당', '하루가', '왔다삼겹살', '팬텀팬피그', '싸다돼지마을',
                '테마라면', '빨봉분식', '봉구스밥버거', '이삭토스트', '코니스', '악어식탁', '별리달리',
                '봉대박스파게티', '더테이블', '오늘은파스타', '누오보나폴리', '피자빼르', '리코타코', '서브웨이',
                '엄마밥상', '한잔할까', '바오밥나무', '맛존', '학생회관', '또바기', '묵찌빠', '내가찜한닭',
                '마초불고기', '손계남할매족발', '등촌샤브샤브', '유가네', '한솥도시락', '더참맛수육국밥',
                '큰맘할대순대국', '아소부', '연어의꿈', '마루', '이지고', '아웃닭', '꼬꼬아찌', '다송치킨',
                '대학생치킨', '블랙꼬끄', '닭섬', '79치킨', '그만먹엉ㅋ'
            ],
            drinkPlace: [
                '하루', '샤오차이나', '김삿갓', '순정닭발', '미소라', '동경야시장', '사막의하얀꽃',
                '이지고', '외갓집포차', '포차어게인', '달빛포차', '숲', '벙커', '시인의바다',
                '한신포차', '포차브라더', '주전자', '건어물을굽는사람들', '사적인포차', '청춘육회',
                '청춘족발', '포차끝판왕', '그옛날풍경', '막쏘맥', '오늘 하루는 음주말고 운동을 해보는게 어떨까요?'
            ]
        }
    }
    _makeRandom(min, max){
        var RandVal = Math.random() * (max- min) + min;
        return Math.floor(RandVal);
    }
    _randomLoading = (food, drink) => {
        setTimeout( () => {
            this.setState({
                food: food,
                drink: drink,
            })
        }, 3000);
    }
    componentDidMount() {
        const { foodPlace, drinkPlace } = this.state;
        var randomNum1 = foodPlace[this._makeRandom(1, foodPlace.length-1)];
        var randomNum2 = drinkPlace[this._makeRandom(1, drinkPlace.length-1)];
        this._randomLoading(randomNum1, randomNum2);
    }
    render() {
        const { drink, food } = this.state;
        return (
            <div className="section-lotto">
                <div className="lottobox">
                    <div className="lottobox-header">
                        술집 추천
                    </div>
                    <div className="lottobox-body">
                        { drink ? (
                            <span>오늘의 술집은!<br /><b>{drink}</b></span> 
                        ) : (
                            <HashLoader
                                color={'#123abc'} 
                                loading={this.state.loading} 
                            />
                        )}
                    </div>
                </div>
                <div className="lottobox">
                    <div className="lottobox-header">
                        밥집 추천
                    </div>
                    <div className="lottobox-body">
                    { food ? (
                            <span>오늘의 밥집은!<br /><b>{food}</b></span> 
                        ) : (
                            <HashLoader
                                color={'#123abc'} 
                                loading={this.state.loading} 
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Lotto;