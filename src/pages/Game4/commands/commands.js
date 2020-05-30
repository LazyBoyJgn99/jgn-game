
/**
 * 闭包的方式
 */

/**
 * 向右移动命令
 * @constructor
 */
export function goRightCommand (received){
    let beforeX = received.x;//记录原先的X坐标
    return {
        execute : function goRight() {//向右移动函数
            received.x = received.x + received.v;
            received.updateStyle();
        },
        undo : function () {//撤销函数
            received.x = beforeX;
            received.updateStyle();
        }
    }
}

/**
 * 向左移动命令
 * @constructor
 */
export function goLeftCommand (received){
    let beforeX = received.x;//记录原先的X坐标
    return {
        execute : function goLeft() {//向左移动函数
            received.x = received.x - received.v;
            received.updateStyle();
        },
        undo : function () {//撤销函数
            received.x = beforeX;
            received.updateStyle();
        }
    }
}

/**
 * 向上移动命令
 * @constructor
 */
export function goUpCommand (received){
    let beforeZ = received.z;//记录原先的Z坐标
    return {
        execute : function goUp() {//向上移动函数
            received.z = received.z + received.v;
            received.updateStyle();
        },
        undo : function () {//撤销函数
            received.z = beforeZ;
            received.updateStyle();
        }
    }
}


/**
 * 向下移动命令
 * @constructor
 */
export function goDownCommand (received){
    let beforeZ = received.z;//记录原先的Z坐标
    return {
        execute : function goDown() {//向下移动函数
            received.z = received.z - received.v;
            received.updateStyle();
        },
        undo : function () {//撤销函数
            received.z = beforeZ;
            received.updateStyle();
        }
    }
}

/**
 * 跳跃命令
 * @constructor
 */
export function jumpCommand (received){
    let beforeY = received.y;//记录原先的Y坐标
    return {
        execute : function jump() {//向下移动函数
            console.log("jump");
            if(!received.isJumping){
                received.isJumping = true;
                let v = received.jump;
                let timer = setInterval(()=>{
                    if(v!==0){
                        received.y = received.y + received.v * v / 100;
                    }
                    received.updateStyle();
                    v -= 1;
                    if(v < -received.jump){
                        received.isJumping = false;
                        clearInterval(timer);
                    }
                },10);
            }
        },
        undo : function () {//撤销函数
            received.y = beforeY;
            received.updateStyle();
        }
    }
}
