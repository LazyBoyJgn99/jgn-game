import React, { Component } from "react";
import Tree from "@/pages/Game3/units/Tree";
import {
  goDownCommand,
  goRightCommand,
  goLeftCommand,
  goUpCommand,
} from "@/pages/Game3/commands/commands"; // 闭包

export default class Game3 extends Component {
  commandList = []; // 定义一个数组专门储存命令

  remakeList = []; // 定义一个数组专门储存撤销的命令

  treeList = [
    new Tree({ name: "小树" }),
    new Tree({ name: "小树" }),
    new Tree({ name: "小树" }),
    new Tree({ name: "小树" }),
    new Tree({ name: "小树" }),
    new Tree({ name: "小树" }),
    new Tree({ name: "小树" }),
    new Tree({ name: "小树" }),
    new Tree({ name: "小树" }),
    new Tree({ name: "小树" }),
    new Tree({ name: "小树" }),
    new Tree({ name: "小树" }),
    new Tree({ name: "小树" }),
    new Tree({ name: "小树" }),
    new Tree({ name: "小树" }),
    new Tree({ name: "小树" }),
    new Tree({ name: "小树" }),
    new Tree({ name: "小树" }),
  ];

  focus = this.treeList[0]; // 焦点

  keyCommand = {
    // 定义好要用到的按键和执行的命令
    buttonRight_: goRightCommand, // 键盘右,默认向右移动
    buttonLeft_: goLeftCommand, // 键盘左,默认向左移动
    buttonUp_: goUpCommand, // 键盘上,默认向上移动
    buttonDown_: goDownCommand, // 键盘下,默认向下移动
    buttonD_: goRightCommand, // 键盘D,默认向右移动
    buttonA_: goLeftCommand, // 键盘A,默认向左移动
    buttonW_: goUpCommand, // 键盘W,默认向上移动
    buttonS_: goDownCommand, // 键盘S,默认向下移动
  };

  /**
   * state用于储存数据
   */
  state = {};

  /**
   * 构造函数
   */
  constructor() {
    super();
    // 渲染
    this.treeList.map((item) => {
      item.width = 1000;
      item.height = 1000;
      return item.updateStyle();
    });
  }

  /**
   * REACT生命周期函数，组件渲染后调用
   */
  componentDidMount() {
    // 添加键盘监听
    document.addEventListener("keydown", this.onKeyDown);
    console.log(this.nv);
  }

  /**
   * REACT生命周期函数，组件销毁前调用
   */
  componentWillUnmount() {
    // 键盘监听结束
    document.removeEventListener("keydown", this.onKeyDown);
  }

  /**
   * 键盘监听事件
   * @param e
   */
  onKeyDown = (e) => {
    console.log(e.keyCode);
    let command = null;
    switch (e.keyCode) {
      case 39: // 键盘右箭头被按下
        command = this.keyCommand.buttonRight_(this.focus); // return一个命令，闭包的方式
        command.execute(); // 执行这个命令
        this.setState({});
        break;
      case 37: // 键盘左箭头被按下
        command = this.keyCommand.buttonLeft_(this.focus);
        command.execute();
        this.setState({});
        break;
      case 38: // 键盘上箭头被按下
        command = this.keyCommand.buttonUp_(this.focus);
        command.execute();
        this.setState({});
        break;
      case 40: // 键盘下箭头被按下
        command = this.keyCommand.buttonDown_(this.focus);
        command.execute();
        this.setState({});
        break;
      case 68: // 键盘D被按下
        command = this.keyCommand.buttonD_(this.focus);
        command.execute();
        this.setState({});
        break;
      case 65: // 键盘A被按下
        command = this.keyCommand.buttonA_(this.focus);
        command.execute();
        this.setState({});
        break;
      case 87: // 键盘W被按下
        command = this.keyCommand.buttonW_(this.focus);
        command.execute();
        this.setState({});
        break;
      case 83: // 键盘S被按下
        command = this.keyCommand.buttonS_(this.focus);
        command.execute();
        this.setState({});
        break;
      case 90: // 按Z撤销
        if (this.commandList.length > 0) {
          command = this.commandList.pop(); // 从command数组中取出最新执行的命令
          command.undo(); // 执行撤销
          this.remakeList.push(command); // 把命令添加到重做列表
          if (this.remakeList.length > 100) {
            // 限制大小
            this.remakeList.shift();
          }
          command = null; // 把command置空
          this.setState({});
        }
        break;
      case 16: // 按shift重做
        if (this.remakeList.length > 0) {
          command = this.remakeList.pop(); // 从remake数组中取出最新执行的命令
          command.execute(); // 执行重做
          this.setState({});
        }
        break;
      default:
        break;
    }
    if (command !== null) {
      // 如果command不为空
      this.commandList.push(command); // 把这个命令储存在数组中
      if (this.commandList.length > 100) {
        // 限制大小
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
    this.treeList.sort(function (a, b) {
      return b.z - a.z;
    });
    return (
      <div className="game3">
        {this.treeList.map((item, i) => {
          return (
            <ImgUnit
              key={i}
              onClick={() => {
                this.setFocus(item);
              }}
              unit={item}
            />
          );
        })}
      </div>
    );
  }
}

const ImgUnit = (onClick, unit) => {
  return (
    <div onClick={onClick}>
      <img
        src={unit.src}
        alt="img"
        style={{
          width: unit.width * unit.proportion,
          height: unit.height * unit.proportion,
          left: unit.left - (unit.width * unit.proportion) / 2,
          top: unit.top - (unit.height * unit.proportion) / 2,
          position: "absolute",
          textAlign: "center",
          lineHeight: `${unit.height}px`,
        }}
      />
    </div>
  );
};
