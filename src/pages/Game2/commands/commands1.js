import Command from "@/pages/baseComponent/Command";

/**
 * 构造的方式，无撤销功能
 */

/**
 * 向右移动命令
 * @constructor
 */
export function GoRightCommand (){
    this.execute = function goRight(focus) {//向右移动函数
        focus.move(focus.left+focus.v,focus.top);
    }
}
GoRightCommand.prototype = new Command({});

/**
 * 向左移动命令
 * @constructor
 */
export function GoLeftCommand (){
    this.execute = function goLeft(focus) {//向左移动函数
        focus.move(focus.left-focus.v,focus.top);
    }
}
GoLeftCommand.prototype = new Command({});

/**
 * 向上移动命令
 * @constructor
 */
export function GoUpCommand (){
    this.execute = function goUp(focus) {//向上移动函数
        focus.move(focus.left,focus.top-focus.v);
    }
}
GoUpCommand.prototype = new Command({});

/**
 * 向上移动命令
 * @constructor
 */
export function GoDownCommand (){
    this.execute = function goDown(focus) {//向下移动函数
        focus.move(focus.left,focus.top+focus.v);
    }
}
GoDownCommand.prototype = new Command({});
