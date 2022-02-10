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
var Play = (function (_super) {
    __extends(Play, _super);
    function Play() {
        return _super.call(this) || this;
    }
    Play.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Play.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handler, this);
    };
    Play.prototype.handler = function (e) {
        SceneManager.getInstance().gotoScene(SceneManager.SCENE_CHOOSE_LEVEL);
    };
    return Play;
}(eui.Component));
__reflect(Play.prototype, "Play", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Play.js.map