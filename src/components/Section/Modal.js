import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            place: '',
            student1: '',
            student2: '',
            student3: '',
            sangrok: '',
            science: '',
            dormitory: ''
        }
    }
    _renderWorkHour = (place) => {

        return (
            <div className="modal-container">
                <div className="modal-header">
                    { this.props.place ? this.props.place : "Loading" }
                </div>
                <div className="modal-body">
                    { this.props.hour ? this.props.hour : "Loading"}
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
                { this._renderWorkHour() }
            </div>
        );
    }
}

export default Modal;