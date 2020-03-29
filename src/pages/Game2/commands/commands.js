import Command from "@/pages/baseComponent/Command";


/**
 * 向右移动命令
 * @constructor
 */
export function GoRightCommand (received){
    this.received = received;
    this.beforeLeft = received.left;//记录原先的X坐标
    this.beforeTop = received.top;//记录原先的Y坐标
    this.execute = function goRight() {//向右移动函数
        this.received.move(this.received.left + this.received.v, this.received.top);
    };
    this.undo = function () {//撤销函数
        this.received.move(this.beforeLeft, this.beforeTop);
    };
}
GoRightCommand.prototype = new Command();

/**
 * 向左移动命令
 * @constructor
 */
export function GoLeftCommand (received){
    this.received = received;
    this.beforeLeft = received.left;//记录原先的X坐标
    this.beforeTop = received.top;//记录原先的Y坐标
    this.execute = function goLeft() {//向左移动函数
        this.received.move(this.received.left - this.received.v, this.received.top);
    };
    this.undo = function () {//撤销函数
        this.received.move(this.beforeLeft, this.beforeTop);
    };
}
GoLeftCommand.prototype = new Command();

/**
 * 向上移动命令
 * @constructor
 */
export function GoUpCommand (received){
    this.received = received;
    this.beforeLeft = received.left;//记录原先的X坐标
    this.beforeTop = received.top;//记录原先的Y坐标
    this.execute = function goUp() {//向上移动函数
        this.received.move(this.received.left, this.received.top - this.received.v);
    };
    this.undo = function () {//撤销函数
        this.received.move(this.beforeLeft, this.beforeTop);
    };
}
GoUpCommand.prototype = new Command();

/**
 * 向上移动命令
 * @constructor
 */
export function GoDownCommand (received){
    this.received = received;
    this.beforeLeft = received.left;//记录原先的X坐标
    this.beforeTop = received.top;//记录原先的Y坐标
    this.execute = function goDown() {//向下移动函数
        this.received.move(this.received.left, this.received.top + this.received.v);
    };
    this.undo = function () {//撤销函数
        this.received.move(this.beforeLeft, this.beforeTop);
    }
}
GoDownCommand.prototype = new Command();
