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
var Frm_Begin = (function (_super) {
    __extends(Frm_Begin, _super);
    function Frm_Begin() {
        return _super.call(this) || this;
    }
    Frm_Begin.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Frm_Begin.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    Frm_Begin.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return Frm_Begin;
}(eui.Component));
__reflect(Frm_Begin.prototype, "Frm_Begin", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Frm_Begin.js.map