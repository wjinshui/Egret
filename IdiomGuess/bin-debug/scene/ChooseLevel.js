var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var ChooseLevel = (function (_super) {
    __extends(ChooseLevel, _super);
    function ChooseLevel() {
        return _super.call(this) || this;
    }
    ChooseLevel.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    ChooseLevel.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.btnReturnMain.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handler, this);
    };
    ChooseLevel.prototype.handler = function (e) {
        SceneManager.getInstance().gotoScene(SceneManager.SCENE_BEGIN);
    };
    return ChooseLevel;
}(eui.Component));
__reflect(ChooseLevel.prototype, "ChooseLevel", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=ChooseLevel.js.map