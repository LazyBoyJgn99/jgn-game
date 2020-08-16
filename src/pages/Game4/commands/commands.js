/**
 * 闭包的方式
 */

/**
 * 向右移动命令
 * @constructor
 */
export function goRightCommand(received) {
  const beforeX = received.x; // 记录原先的X坐标
  return {
    execute: function goRight() {
      // 向右移动函数
      received.x += received.v;
      received.updateStyle();
    },
    undo() {
      // 撤销函数
      received.x = beforeX;
      received.updateStyle();
    },
  };
}

/**
 * 向左移动命令
 * @constructor
 */
export function goLeftCommand(received) {
  const beforeX = received.x; // 记录原先的X坐标
  return {
    execute: function goLeft() {
      // 向左移动函数
      received.x -= received.v;
      received.updateStyle();
    },
    undo() {
      // 撤销函数
      received.x = beforeX;
      received.updateStyle();
    },
  };
}

/**
 * 向上移动命令
 * @constructor
 */
export function goUpCommand(received) {
  const beforeZ = received.z; // 记录原先的Z坐标
  return {
    execute: function goUp() {
      // 向上移动函数
      received.z += received.v;
      received.updateStyle();
    },
    undo() {
      // 撤销函数
      received.z = beforeZ;
      received.updateStyle();
    },
  };
}

/**
 * 向下移动命令
 * @constructor
 */
export function goDownCommand(received) {
  const beforeZ = received.z; // 记录原先的Z坐标
  return {
    execute: function goDown() {
      // 向下移动函数
      received.z -= received.v;
      received.updateStyle();
    },
    undo() {
      // 撤销函数
      received.z = beforeZ;
      received.updateStyle();
    },
  };
}

/**
 * 跳跃命令
 * @constructor
 */
export function jumpCommand(received) {
  const beforeY = received.y; // 记录原先的Y坐标
  return {
    execute: function jump() {
      // 跳跃函数
      // eslint-disable-next-line no-console
      console.log("jump");
      if (!received.isJumping) {
        // isJumping字段判断是否已经在跳跃
        received.isJumping = true;
        let v = received.jump; // 设置单位的起跳速度等于自身的弹跳系数
        const timer = setInterval(() => {
          received.y += (received.v * v) / 100; // 单位的y坐标随速度变化
          received.updateStyle(); // 重新渲染
          v -= 1; // 模拟重力，速度越来越小
          if (v < -received.jump) {
            // 速度等于负起跳速度时相当于回到原点，此时停止跳跃事件
            received.isJumping = false;
            clearInterval(timer);
          }
        }, 10);
      }
    },
    undo() {
      // 撤销函数
      received.y = beforeY;
      received.updateStyle();
    },
  };
}
