import React, { Component } from 'react';
import './Chat.css';

class Chat extends Component {
    render() {
        return (
            <div className="section-chat">
                <div className="chatbox">
                    <div className="chatbox-header">
                        <span>내용을 입력하세요. (최대 50글자)</span>
                        <input type="text" />
                    </div>
                    <div className="chatbox-body">
                        <a href={null}>쓰기</a>
                    </div>
                </div>
                <div className="memobox">
                    <div className="memobox-header">
                        익명
                    </div>
                    <div className="memobox-body">
                        ㅋㅋ
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;