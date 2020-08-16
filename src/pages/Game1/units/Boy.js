import CreateUnit from "@/pages/baseComponent/Unit";

function Boy(boy) {
  const flag = boy == null;
  this.name = flag ? "boy" : boy.name || "boy";
}

Boy.prototype = new CreateUnit({});

export default Boy;
