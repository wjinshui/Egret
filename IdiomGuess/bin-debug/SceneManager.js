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
var SceneManager = (function (_super) {
    __extends(SceneManager, _super);
    function SceneManager() {
        var _this = _super.call(this) || this;
        _this.begin = new Begin();
        _this.choose_level = new ChooseLevel();
        _this.play = new Play();
        _this.addChild(_this.begin);
        return _this;
    }
    SceneManager.getInstance = function () {
        if (SceneManager.instance == null)
            SceneManager.instance = new SceneManager();
        return SceneManager.instance;
    };
    SceneManager.prototype.gotoScene = function (scene) {
        this.removeChildren();
        switch (scene) {
            case SceneManager.SCENE_BEGIN:
                this.addChild(this.begin);
                break;
            case SceneManager.SCENE_CHOOSE_LEVEL:
                this.addChild(this.choose_level);
                break;
            case SceneManager.PLAY:
                this.addChild(this.play);
                break;
        }
    };
    SceneManager.SCENE_BEGIN = 'begin';
    SceneManager.SCENE_CHOOSE_LEVEL = 'choose_level';
    SceneManager.PLAY = 'play';
    return SceneManager;
}(egret.DisplayObjectContainer));
__reflect(SceneManager.prototype, "SceneManager");
//# sourceMappingURL=SceneManager.js.map