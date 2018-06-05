import React, { Component } from 'react';

class Menubox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numToDay: {
                'mon': '월요일',
                'tue': '화요일',
                'wed': '수요일',
                'thu': '목요일',
                'fri': '금요일',
                'sat': '토요일',
                'sun': '일요일'
            }
        }
    }
    render() {
        const menu = this.props.menu;
        const { day } = this.props;
        return (
            <div>
                <div className="menubox">
                    <div className="menubox-header">
                        <span className="menubox-place">{this.props.place}</span><span>{ this.state.numToDay[day] ? this.state.numToDay[day] : "오늘"}</span>
                    </div>
                    <div className="menubox-body">
                        { menu ? menu.split('\n').map( line => {
                                    return (<span>{line}<br/></span>)})
                        : "식단 없음"}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menubox;