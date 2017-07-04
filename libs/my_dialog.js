/**
 * Created by Administrator on 2017/7/4.
 */
function DialogHelper() {
    /** **********私有属性*********** */
    var title = "提示消息";
    // 设置消息正文
    var content = "";
    // 设置按钮
    var buttons = {
        '确定' : function() {
            $(this).dialog('close');
        }
    };
    var width = 250;
    var height = 154;
    var modal = false;
    var dialogDiv = $("<div><p><span class=\"ui-icon ui-icon-info\" style=\"float: left; margin: 0 7px 20px 0;\"></span></p></div>");
    /** **********getter和setter*********** */
    var setTitle = function(val) {
        title = val;
    }
    var getTitle = function() {
        return title;
    }
    var setContent = function(val) {
        content = val;
    }
    var getContent = function() {
        return content;
    }
    var setButtons = function(val) {
        buttons = val;
    }
    var getButtons = function() {
        return buttons;
    }
    var setWidth = function(val) {
        width = val;
    }
    var getWidth = function() {
        return width;
    }
    var setHeight = function(val) {
        height = val;
    }
    var getHeight = function() {
        return height;
    }
    var setModal = function(val) {
        modal = val;
    }
    var getModal = function() {
        return modal;
    }
    var setDialogDiv = function(val) {
        dialogDiv = val;
    }
    var getDialogDiv = function() {
        return dialogDiv;
    }
    /** **********open方法，弹出对话框*********** */
    var open = function() {
        if (arguments.length == 1 && (typeof arguments[0] == "string"))
            setContent(arguments[0]);
        if (arguments.length == 2 && (typeof arguments[0] == "string")
            && (typeof arguments[1] == "string")) {
            setTitle(arguments[0]);
            setContent(arguments[1]);
        }
        var dlg = dialogDiv.clone(); // 这个克隆很重要,否则反复添加正文。
        dlg.children().filter("p").html(
            dialogDiv.children().filter("p").html()
            + getContent());
       /* dlg.dialog({
            autoOpen : true,
            show : 'scale',
            hide : 'scale',
            position : 'center',
            height : getHeight(),
            width : getWidth(),
            modal : getModal(),
            title : getTitle(),
            buttons : getButtons()
        });*/
    }
    /** **********对外界暴露一些公共方法*********** */
    return {
        setTitle : setTitle,
        setContent : setContent,
        setButtons : setButtons,
        setWidth : setWidth,
        setHeight : setHeight,
        setModal : setModal,
        setDialogDiv : setDialogDiv,
        open : open
    }
    // TODO:可能有内存泄露
}
