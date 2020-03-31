import Command from "@/pages/baseComponent/Command";

/**
 * 闭包的方式
 */

/**
 * 向右移动命令
 * @constructor
 */
export function goRightCommand (received){
    let beforeLeft = received.left,//记录原先的X坐标
        beforeTop = received.top;//记录原先的Y坐标
    return {
        execute : function goRight() {//向右移动函数
            received.move(received.left + received.v, received.top);
        },
        undo : function () {//撤销函数
            received.move(beforeLeft, beforeTop);
        }
    }
}

/**
 * 向左移动命令
 * @constructor
 */
export function goLeftCommand (received){
    let beforeLeft = received.left,//记录原先的X坐标
        beforeTop = received.top;//记录原先的Y坐标
    return {
        execute : function goLeft() {//向左移动函数
            received.move(received.left - received.v, received.top);
        },
        undo : function () {//撤销函数
            received.move(beforeLeft, beforeTop);
        }
    }
}

/**
 * 向上移动命令
 * @constructor
 */
export function goUpCommand (received){
    let beforeLeft = received.left,//记录原先的X坐标
        beforeTop = received.top;//记录原先的Y坐标
    return {
        execute : function goUp() {//向上移动函数
            received.move(received.left, received.top - received.v);
        },
        undo : function () {//撤销函数
            received.move(beforeLeft, beforeTop);
        },
    }
}

/**
 * 向上移动命令
 * @constructor
 */
export function goDownCommand (received){
    let beforeLeft = received.left,//记录原先的X坐标
        beforeTop = received.top;//记录原先的Y坐标
    return {
        execute : function goDown() {//向下移动函数
            received.move(received.left, received.top + received.v);
        },
        undo : function () {//撤销函数
            received.move(beforeLeft, beforeTop);
        }
    };
}
