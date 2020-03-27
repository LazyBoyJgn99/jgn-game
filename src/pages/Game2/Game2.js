import React, { Component } from 'react';

export default class Game2 extends Component {
    /**
     * REACT生命周期函数，生成后
     */
    componentDidMount(){
        //添加键盘监听
        document.addEventListener("keydown", this.onKeyDown);
    }

    /**
     * REACT生命周期函数，组件销毁前
     */
    componentWillUnmount(){
        //键盘监听结束
        document.removeEventListener("keydown", this.onKeyDown);
    }

    /**
     * 键盘监听事件
     * @param e
     */
    onKeyDown = (e) => {
        console.log(e.keyCode);
        switch( e.keyCode) {
            case 13:
                break;
            case 37:
                break;
            case 32:
                break;
            case 70:
                break;
            default:
                break
        }
    };

    state = {


    };

    render() {
        return (
            <div className={"game2"}>

            </div>
        );
    }
}

