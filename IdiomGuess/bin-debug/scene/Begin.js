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
var Begin = (function (_super) {
    __extends(Begin, _super);
    function Begin() {
        return _super.call(this) || this;
    }
    Begin.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Begin.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handler, this);
    };
    Begin.prototype.handler = function (e) {
        SceneManager.getInstance().gotoScene(SceneManager.PLAY);
        console.log('aaa');
    };
    return Begin;
}(eui.Component));
__reflect(Begin.prototype, "Begin", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Begin.js.map