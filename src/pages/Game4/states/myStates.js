const STATE = {
  STATE_STANDING: 0, // 站立
  STATE_JUMPING: 1, // 跳跃
  STATE_DEFENDING: 2, // 防御
  STATE_DIVING: 3, // 速降
};

/**
 * 站立状态
 * @constructor
 */
export function STATE_STANDING(received) {
  return {
    execute: function STANDING() {},
    update() {},
  };
}

/**
 * 跳跃状态
 * @constructor
 */
export function STATE_JUMPING(received) {
  return {
    execute: function JUMPING() {},
    undo() {},
  };
}

/**
 * 防御状态
 * @constructor
 */
export function STATE_DEFENDING(received) {
  return {
    execute: function DEFENDING() {},
    undo() {},
  };
}

/**
 * 速降状态
 * @constructor
 */
export function STATE_DIVING(received) {
  return {
    execute: function DIVING() {},
    undo() {},
  };
}
