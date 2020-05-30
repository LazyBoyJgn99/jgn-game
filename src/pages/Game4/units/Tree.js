import CreateUnit from "@/pages/Game4/units/Unit";
import treeImg from "@/img/tree.png"

function Tree (tree){
    let flag = tree == null;
    this.name = flag ? "tree":tree.name || "tree";
    this.src = flag ? treeImg:tree.src || treeImg;
}

Tree.prototype = new CreateUnit({});

export default Tree;
