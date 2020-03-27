function CreateUnit (unit){
    this.width = unit.width||100;//宽度
    this.height = unit.height||100;//高度
    this.left = unit.left||100;//X坐标
    this.top = unit.top||100;//Y坐标
    this.v = unit.v||100;//移动速度
    this.move = function (left,top) {//移动函数
        this.left = left;
        this.top = top;
    }
}
export default CreateUnit;
