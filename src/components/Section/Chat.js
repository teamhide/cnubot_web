import React, { Component } from 'react';
import './Chat.css';
import PersonIcon from '../../img/person.jpg';
import ThreeDots from '../../img/3dots.png';

class Chat extends Component {
    constructor() {
        super()
        this.state = {
            inputContent: '',
            inputPassword: '',
            initUrl: 'http://api.highfaiv.kr/article_detail/?ordering=-date',
            next: '',
            prev: '',
            article: []
        }
    }
    componentDidMount() {
        this._getArticle();
    }
    _getArticle = async () => {
        const article = await this._callApi("http://api.highfaiv.kr/article_detail/?ordering=-date");
        this.setState({
            article: article.results,
            next: article.next,
            prev: article.previous
        })
    }
    _loadMoreArticle = async () => {
        const article = await this._callApi(this.state.next);
        this.setState({
            article: [...this.state.article, ...article.results],
            next: article.next,
            prev: article.previous
        })
    }
    _callApi = (url) => {
        return fetch(url)
        .then(response => response.json())
        .catch(err => console.log("_callApi() fail"))
    }
    _test = (no) => {
        alert(no);
    }
    _renderArticle = (content, date, commentCount, index) => {
        return (
            <div className="memobox" key={index} no={index}>
                <div className="memobox-header">
                    <div className="memobox-header-left">
                        <div className="memobox-header-icon">
                            <img src={PersonIcon} alt="person" />
                        </div>
                        <div className="memobox-header-namedate">
                            <div className="memobox-header-name">
                                <b>익명</b>
                            </div>
                            <div className="memobox-header-date">
                                { date }
                            </div>
                        </div>
                    </div>
                    <div className="memobox-header-right">
                        <div className="memobox-header-option" onClick={() =>this._test(index)}><img src={ThreeDots} alt="dots" /></div>
                    </div>
                </div>
                <div className="memobox-body">
                    { content ? content.split('\n').map( line => {
                        return (<span>{line}<br/></span>)})
                    : "게시글 없음"}
                </div>
                <div className="memobox-comment">
                    댓글 { commentCount }개
                </div>
                <div className="memobox-comment-body">
                    <span>댓글달기</span>
                </div>
            </div>
        )
    }
    _writeArticle = () => {
        const { inputContent, inputPassword } = this.state;
        if(inputContent === "" || inputPassword === "") {
            alert("내용 또는 암호는 공백일 수 없습니다.");
        } else {
            fetch("http://api.highfaiv.kr/article/",
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({content: inputContent, userkey: 'HFWeb', password: inputPassword})
            })
            .then(response => console.log(response))
            .then(this._getArticle())
            .then(this._clearInput())
            .catch(err => console.log("writeApi() error"))
        }
    }
    _handleTextarea = (e) => {
        this.setState({
            inputContent: e.target.value
        })
    }
    _handleInput = (e) => {
        this.setState({
            inputPassword: e.target.value
        })
    }
    _clearInput = () => {
        this.setState({
            inputContent: '',
            inputPassword: ''
        })
    }
    render() {
        const { article, next } = this.state;
        return (
            <div className="section-chat">
                <div className="chatbox">
                    <div className="chatbox-header">
                        <div className="chatbox-header-top">
                            <span>내용을 입력하세요. (최대 50글자)</span>
                            <input
                                type="password"
                                placeholder="암호"
                                onChange={this._handleInput}
                                value={this.state.inputPassword}
                            />
                        </div>
                        <div className="chatbox-header-bottom">
                            <textarea
                                onChange={this._handleTextarea}
                                value={this.state.inputContent}
                            />
                        </div>
                    </div>
                    <div className="chatbox-body">
                        <a href={null} onClick={this._writeArticle}>쓰기</a>
                    </div>
                </div>
                { article.map( (data, index) => {
                    return this._renderArticle(data.content, data.date, data.commentCount, data.articleNo) 
                })}
                { next ? <div className="load-more"><a className="load-more-button" href={null} onClick={this._loadMoreArticle}>더보기</a></div> : ""}
            </div>
        );
    }
}

export default Chat;