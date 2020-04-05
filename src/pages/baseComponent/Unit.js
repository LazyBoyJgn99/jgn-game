import param from "@/pages/Game3/parameter"

function CreateUnit (unit){
    this.width = unit.width || 1000;//宽度
    this.height = unit.height || 1000;//高度
    this.left = unit.left || 100;//最终渲染X坐标
    this.top = unit.top || 100; //最终渲染Y坐标
    this.proportion = unit.proportion || 1;//缩放比例
    this.x = unit.x || 0;//虚拟X坐标
    this.y = unit.y || 0;//虚拟Y坐标
    this.z = unit.z || 1700;//虚拟Z坐标
    this.v = unit.v || 100;//移动速度
    this.move = function (left,top) {//移动函数
        this.left = left;
        this.top = top;
    }
    this.updateStyle = function () {//计算渲染样式
        if(this.z < param.screenZ){
            this.z = param.screenZ;
        }
        this.proportion  = param.screenZ / this.z;
        this.left = window.innerWidth / 2 + param.eyeX + (this.x - param.eyeX) * this.proportion;
        this.top = window.innerHeight / 2 - param.eyeY - (this.y - param.eyeY) * this.proportion;
    }
}
export default CreateUnit;
