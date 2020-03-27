function CreateCommand ( receiver ){
    this.receiver = receiver;
}
CreateCommand.prototype.execute = function() {
    this.receiver.action();
};
function Command() {
    this.execute=function (user) {};
    this.undo=function () {};
    return this;
}

export default CreateCommand;
