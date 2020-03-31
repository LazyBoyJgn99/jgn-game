import React, { Component } from 'react';
import Boy from "@/pages/Game1/units/Boy";
// import {GoDownCommand,GoRightCommand,GoLeftCommand,GoUpCommand} from "@/pages/Game2/commands/commands1";//无撤销构造
// import {GoDownCommand,GoRightCommand,GoLeftCommand,GoUpCommand} from "@/pages/Game2/commands/commands2";//有撤销构造
import {goDownCommand,goRightCommand,goLeftCommand,goUpCommand} from "@/pages/Game2/commands/commands3";//闭包

export default class Game2 extends Component {

    commandList = [];//定义一个数组专门储存命令
    remakeList = [];//定义一个数组专门储存撤销的命令
    boyList = [new Boy({name:"小王"}),new Boy({name:"小北"}),new Boy({name:"小清"}),new Boy({name:"小狗"})];
    boy = new Boy({name:"小明"});
    focus = this.boy;//焦点
    // commands = {//定义好要用到的命令
    //     goRightCommand : new GoRightCommand(),//向右移动命令
    //     goLeftCommand : new GoLeftCommand(),//向左移动命令
    //     goUpCommand : new GoUpCommand(),//向上移动命令
    //     goDownCommand : new GoDownCommand(),//向下移动命令
    // };
    // keyCommand = {//定义好要用到的按键和执行的命令
    //     buttonRight_ : this.commands.goRightCommand,//键盘右,默认向右移动
    //     buttonLeft_ : this.commands.goLeftCommand,//键盘左,默认向左移动
    //     buttonUp_ : this.commands.goUpCommand,//键盘上,默认向上移动
    //     buttonDown_ : this.commands.goDownCommand,//键盘下,默认向下移动
    //     buttonD_ : this.commands.goRightCommand,//键盘D,默认向右移动
    //     buttonA_ : this.commands.goLeftCommand,//键盘A,默认向左移动
    //     buttonW_ : this.commands.goUpCommand,//键盘W,默认向上移动
    //     buttonS_ : this.commands.goDownCommand,//键盘S,默认向下移动
    // };
    keyCommand = {//定义好要用到的按键和执行的命令
        buttonRight_ : goRightCommand,//键盘右,默认向右移动
        buttonLeft_ : goLeftCommand,//键盘左,默认向左移动
        buttonUp_ : goUpCommand,//键盘上,默认向上移动
        buttonDown_ : goDownCommand,//键盘下,默认向下移动
        buttonD_ : goRightCommand,//键盘D,默认向右移动
        buttonA_ : goLeftCommand,//键盘A,默认向左移动
        buttonW_ : goUpCommand,//键盘W,默认向上移动
        buttonS_ : goDownCommand,//键盘S,默认向下移动
    };

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
        let command = null;
        switch(e.keyCode) {
            case 39://键盘右箭头被按下
                // command = new this.keyCommand.buttonRight_(this.focus);//new一个命令，构造的方式
                command = this.keyCommand.buttonRight_(this.focus);//return一个命令，闭包的方式
                command.execute();//执行这个命令
                // this.keyCommand.buttonRight_.execute(this.focus);
                this.setState({});
                break;
            case 37://键盘左箭头被按下
                // command = new this.keyCommand.buttonLeft_(this.focus);
                command = this.keyCommand.buttonLeft_(this.focus);
                command.execute();
                // this.keyCommand.buttonLeft_.execute(this.focus);
                this.setState({});
                break;
            case 38://键盘上箭头被按下
                // command = new this.keyCommand.buttonUp_(this.focus);
                command = this.keyCommand.buttonUp_(this.focus);
                command.execute();
                // this.keyCommand.buttonUp_.execute(this.focus);
                this.setState({});
                break;
            case 40://键盘下箭头被按下
                // command = new this.keyCommand.buttonDown_(this.focus);
                command = this.keyCommand.buttonDown_(this.focus);
                command.execute();
                // this.keyCommand.buttonDown_.execute(this.focus);
                this.setState({});
                break;
            case 68://键盘D被按下
                // command = new this.keyCommand.buttonD_(this.focus);
                command = this.keyCommand.buttonD_(this.focus);
                command.execute();
                // this.keyCommand.buttonD_.execute(this.focus);
                this.setState({});
                break;
            case 65://键盘A被按下
                // command = new this.keyCommand.buttonA_(this.focus);
                command = this.keyCommand.buttonA_(this.focus);
                command.execute();
                // this.keyCommand.buttonA_.execute(this.focus);
                this.setState({});
                break;
            case 87://键盘W被按下
                // command = new this.keyCommand.buttonW_(this.focus);
                command = this.keyCommand.buttonW_(this.focus);
                command.execute();
                // this.keyCommand.buttonW_.execute(this.focus);
                this.setState({});
                break;
            case 83://键盘S被按下
                // command = new this.keyCommand.buttonS_(this.focus);
                command = this.keyCommand.buttonS_(this.focus);
                command.execute();
                // this.keyCommand.buttonS_.execute(this.focus);
                this.setState({});
                break;
            case 90://按Z撤销
                if(this.commandList.length>0){
                    command = this.commandList.pop();//从command数组中取出最新执行的命令
                    command.undo();//执行撤销
                    this.remakeList.push(command);//把命令添加到重做列表
                    if(this.remakeList.length>100){//限制大小
                        this.remakeList.shift();
                    }
                    command = null;//把command置空
                    this.setState({});
                }
                break ;
            case 16://按shift重做
                if(this.remakeList.length>0){
                    command = this.remakeList.pop();//从remake数组中取出最新执行的命令
                    command.execute();//执行重做
                    this.setState({});
                }
                break ;
            default:
                break;
        }
        if(command!==null){//如果command不为空
            this.commandList.push(command);//把这个命令储存在数组中
            if(this.commandList.length>100){//限制大小
                this.commandList.shift();
            }
        }
    };


    /**
     * 设置焦点
     * @param util
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
