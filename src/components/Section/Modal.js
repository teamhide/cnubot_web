import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
    constructor(props) {
        super(props);
    }
    _renderWorkHour = (place) => {
        let workHour = "";
        if(place === "제2학생회관" || place === "제3학생회관" || place === "상록회관" || place === "생활과학대학") {
            workHour = `
            <span>월요일</span>
            <span>오전 11:30 ~ 오후 02:00</span>
            <span>화요일</span>
            <span>오전 11:30 ~ 오후 02:00</span>
            <span>수요일</span>
            <span>오전 11:30 ~ 오후 02:00</span>
            <span>목요일</span>
            <span>오전 11:30 ~ 오후 02:00</span>
            <span>금요일</span>
            <span>오전 11:30 ~ 오후 02:00</span>
            <span>토요일</span>
            <span>영업 안함</span>
            <span>일요일</span>
            <span>영업 안함</span>
            `;
        } else if(place === "기숙사") {
            workHour = `
            <span class="dorm-header">월요일</span>
            <span class="dorm-body">오전 07:00 ~ 오전 09:00</span>
            <span class="dorm-body">오전 11:30 ~ 오후 01:30</span>
            <span class="dorm-body">오후 05:30 ~ 오후 07:30</span>
            <span class="dorm-header">화요일</span>
            <span class="dorm-body">오전 07:00 ~ 오전 09:00</span>
            <span class="dorm-body">오전 11:30 ~ 오후 01:30</span>
            <span class="dorm-body">오후 05:30 ~ 오후 07:30</span>
            <span class="dorm-header">수요일</span>
            <span class="dorm-body">오전 07:00 ~ 오전 09:00</span>
            <span class="dorm-body">오전 11:30 ~ 오후 01:30</span>
            <span class="dorm-body">오후 05:30 ~ 오후 07:30</span>
            <span class="dorm-header">목요일</span>
            <span class="dorm-body">오전 07:00 ~ 오전 09:00</span>
            <span class="dorm-body">오전 11:30 ~ 오후 01:30</span>
            <span class="dorm-body">오후 05:30 ~ 오후 07:30</span>
            <span class="dorm-header">금요일</span>
            <span class="dorm-body">오전 07:00 ~ 오전 09:00</span>
            <span class="dorm-body">오전 11:30 ~ 오후 01:30</span>
            <span class="dorm-body">오후 05:30 ~ 오후 07:30</span>
            <span class="dorm-header">토요일</span>
            <span class="dorm-body">오전 07:30 ~ 오전 09:00</span>
            <span class="dorm-body">오전 11:30 ~ 오후 01:30</span>
            <span class="dorm-body">오후 05:30 ~ 오후 07:00</span>
            <span class="dorm-header">일요일</span>
            <span class="dorm-body">오전 07:30 ~ 오전 09:00</span>
            <span class="dorm-body">오전 11:30 ~ 오후 01:30</span>
            <span class="dorm-body">오후 05:30 ~ 오후 07:00</span>
            `
        } else if(place === "제1학생회관") {
            workHour = `
            <span>월요일</span>
            <span>오전 11:00 ~ 오후 07:00</span>
            <span>화요일</span>
            <span>오전 11:00 ~ 오후 07:00</span>
            <span>수요일</span>
            <span>오전 11:00 ~ 오후 07:00</span>
            <span>목요일</span>
            <span>오전 11:00 ~ 오후 07:00</span>
            <span>금요일</span>
            <span>오전 11:00 ~ 오후 07:00</span>
            <span>토요일</span>
            <span>오전 11:00 ~ 오후 02:00</span>
            <span>일요일</span>
            <span>영업하지 않습니다</span>
            `
        } else {
            workHour = "Error"
        }
        return (
            <div className="modal-container" onClick={() => console.log(1)} >
                <div className="modal-header">
                    { this.props.place ? this.props.place : "Loading" }
                </div>
                <div className="modal-body">
                    { workHour ? (
                        <div>
                            <div dangerouslySetInnerHTML={ {__html: workHour} }></div>
                        </div>
                    ) : "Loading" }
                </div>
                <div className="modal-footer">
                    <button type="button" onClick={this.props.closeFunc}>닫기</button>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div className="modal">
                { this._renderWorkHour(this.props.place) }
            </div>
        );
    }
}

export default Modal;