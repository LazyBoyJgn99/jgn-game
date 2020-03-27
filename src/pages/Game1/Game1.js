import React, { Component } from 'react';
import CreateUnit from "@/pages/baseComponent/Unit";
import Boy from "./units/Boy";

export default class Game1 extends Component {

    boyList = [new Boy({name:"小王"}),new Boy({name:"小北"}),new Boy({name:"小清"}),new Boy({name:"小狗"})];
    boy = new Boy({name:"小明"});
    focus = this.boy;//焦点
    /**
     * state用于储存数据
     */
    state = {
    };

    /**
     * REACT生命周期函数，组件渲染后调用
     */
    componentDidMount(){
        //添加键盘监听
        document.addEventListener("keydown", this.onKeyDown);
    }

    /**
     * REACT生命周期函数，组件销毁前调用
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
        switch(e.keyCode) {
            case 39://向右移动
                this.focus.move(this.focus.left+this.focus.v,this.focus.top);
                this.setState({});
                break;
            case 37://向左移动
                this.focus.move(this.focus.left-this.focus.v,this.focus.top);
                this.setState({});
                break;
            case 38://向上移动
                this.focus.move(this.focus.left,this.focus.top-this.focus.v);
                this.setState({});
                break;
            case 40://向下移动
                this.focus.move(this.focus.left,this.focus.top+this.focus.v);
                this.setState({});
                break;
            default:
                break
        }
    };

    /**
     * 设置焦点
     */
    setFocus = (util) => {
        this.focus = util;
    };

    /**
     * REACT生命周期主函数，用于渲染页面
     * @returns {*}
     */
    render() {
        console.log(this.boyList);
        return (
            <div className = {"game1"}>
                {
                    this.boyList.map((item,i)=>{
                        return <BoyUnit
                            key = {i}
                            onClick = {()=>{
                                this.setFocus(item);
                            }}
                            unit = {item}
                        />
                    })
                }
                <BoyUnit
                    onClick = {()=>{
                        this.setFocus(this.boy);
                    }}
                    unit = {this.boy}
                />
            </div>
        );
    }
}

class BoyUnit extends Component{
    render() {
        const {onClick,unit}=this.props;
        return <div
            onClick = {onClick}
            style = {{
                border:"1px black solid",
                width:unit.width,
                height:unit.height,
                left:unit.left-unit.width/2,
                top:unit.top-unit.height/2,
                position:"absolute",
                textAlign:"center",
                lineHeight:unit.height+"px"
            }}
        >
            {unit.name}
        </div>;
    }
}
