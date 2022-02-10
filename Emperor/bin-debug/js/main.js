

var extendStatics = Object.setPrototypeOf ||
({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

var __extends = function (d, b) {
extendStatics(d, b);
function __() { this.constructor = d; }
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var __assign = Object.assign || function (t) {
for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
}
return t;
};

var __rest = function (s, e) {
var t = {};
for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
    }
return t;
};

var __decorate = function (decorators, target, key, desc) {
var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __param = function (paramIndex, decorator) {
return function (target, key) { decorator(target, key, paramIndex); }
};

var __metadata = function (metadataKey, metadataValue) {
if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
};

var __awaiter = function (thisArg, _arguments, P, generator) {
function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
});
};

var __generator = function (thisArg, body) {
var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
function verb(n) { return function (v) { return step([n, v]); }; }
function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
            case 0: case 1: t = op; break;
            case 4: _.label++; return { value: op[1], done: false };
            case 5: _.label++; y = op[1]; op = [0]; continue;
            case 7: op = _.ops.pop(); _.trys.pop(); continue;
            default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                if (t[2]) _.ops.pop();
                _.trys.pop(); continue;
        }
        op = body.call(thisArg, _);
    } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
    if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
}
};

var __exportStar = function(m, exports) {
for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};

var __createBinding = Object.create ? (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
o[k2] = m[k];
});

var __values = function (o) {
var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
if (m) return m.call(o);
if (o && typeof o.length === "number") return {
    next: function () {
        if (o && i >= o.length) o = void 0;
        return { value: o && o[i++], done: !o };
    }
};
throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var __read = function (o, n) {
var m = typeof Symbol === "function" && o[Symbol.iterator];
if (!m) return o;
var i = m.call(o), r, ar = [], e;
try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
}
catch (error) { e = { error: error }; }
finally {
    try {
        if (r && !r.done && (m = i["return"])) m.call(i);
    }
    finally { if (e) throw e.error; }
}
return ar;
};

var __spread = function () {
for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
return ar;
};

var __spreadArrays = function () {
for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
return r;
};

var __await = function (v) {
return this instanceof __await ? (this.v = v, this) : new __await(v);
};

var __asyncGenerator = function (thisArg, _arguments, generator) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var g = generator.apply(thisArg, _arguments || []), i, q = [];
return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
function fulfill(value) { resume("next", value); }
function reject(value) { resume("throw", value); }
function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};

var __asyncDelegator = function (o) {
var i, p;
return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
};

var __asyncValues = function (o) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var m = o[Symbol.asyncIterator], i;
return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};

var __makeTemplateObject = function (cooked, raw) {
if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
o["default"] = v;
};

var __importStar = function (mod) {
if (mod && mod.__esModule) return mod;
var result = {};
if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
__setModuleDefault(result, mod);
return result;
};

var __importDefault = function (mod) {
return (mod && mod.__esModule) ? mod : { "default": mod };
};

var __classPrivateFieldGet = function (receiver, privateMap) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
}
return privateMap.get(receiver);
};

var __classPrivateFieldSet = function (receiver, privateMap, value) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
}
privateMap.set(receiver, value);
return value;
};

var __reflect = function(p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/AssetAdapter.ts":
/***/ (function(module, exports) {

//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var AssetAdapter = /** @class */ (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
window["AssetAdapter"] = AssetAdapter;
__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]); 


/***/ }),

/***/ "./src/DataAccess.ts":
/***/ (function(module, exports) {

var DataAccess = /** @class */ (function () {
    function DataAccess() {
    }
    /**
     * 数据存储函数
     */
    DataAccess.prototype.save_key = function (key_name, key_value) {
        var key = key_name;
        var value = key_value;
        egret.localStorage.setItem(key, value);
    };
    /**
     * 读取数据
     */
    DataAccess.prototype.get_key = function (key_name) {
        var value = egret.localStorage.getItem(key_name);
        return value;
    };
    /**
     * 删除数据
     */
    DataAccess.prototype.del_key = function (key_name) {
        egret.localStorage.removeItem(key_name);
        return true;
    };
    return DataAccess;
}());
window["DataAccess"] = DataAccess;
__reflect(DataAccess.prototype,"DataAccess",[]); 


/***/ }),

/***/ "./src/GameController.ts":
/***/ (function(module, exports) {

/**
 * @create 2022-01-27 13:03:13
 */
var GameController = /** @class */ (function () {
    function GameController() {
        this.year = 1;
        this.month = 0;
        this.time = 0;
        console.log('in Gamecontroll');
        this.initialSound();
        this.loadConf();
    }
    GameController.prototype.spendTime = function (t) {
        if (t === void 0) { t = 1; }
        this.time += t;
        if (this.time >= 3) {
            this.time = 0;
            this.month += 1;
            if (this.month >= 12) {
                this.month = 0;
                this.year += 1;
            }
        }
    };
    GameController.prototype.getTime = function () {
        var result = this.国号 + " " + this.年号 + " " + Utils.digitToChinese(this.year) + "\u5E74(" + GameController.SEASON_NAME[Math.floor(this.month / 3)] + ") " + GameController.MONTH_NAME[this.month] + " " + GameController.TIME_NAME[this.time] + "   ";
        return result;
    };
    GameController.prototype.initialSound = function () {
        this.music_on = true;
        this.music_bg = RES.getRes('bg_mp3');
        this.music_wansui = RES.getRes('万岁_mp3');
        // this.music_bg.load("resource/assets/music/bg.mp3");
        // this.music_wansui.load("resource/assets/music/万岁.mp3");
    };
    GameController.prototype.playBGM = function () {
        if (this.music_on)
            this.music_bg.play(0, 0);
    };
    GameController.prototype.playWansui = function () {
        if (this.music_on)
            this.music_wansui.play(0, 1);
    };
    Object.defineProperty(GameController.prototype, "\u56FD\u53F7", {
        get: function () {
            return this._国号;
        },
        set: function (value) {
            this._国号 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameController.prototype, "\u5E74\u53F7", {
        get: function () {
            return this._年号;
        },
        set: function (value) {
            this._年号 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameController.prototype, "Conf", {
        get: function () {
            return this.conf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameController.prototype, "Newgame_setting", {
        get: function () {
            return this.newgame_setting;
        },
        enumerable: false,
        configurable: true
    });
    GameController.prototype.loadConf = function () {
        this.conf = RES.getRes("conf_json");
        this.newgame_setting = RES.getRes("new_game");
    };
    GameController.getInstance = function () {
        if (GameController.instance == null)
            GameController.instance = new GameController();
        return GameController.instance;
    };
    Object.defineProperty(GameController.prototype, "curRole", {
        get: function () {
            return this._curRole;
        },
        set: function (value) {
            this._curRole = value;
        },
        enumerable: false,
        configurable: true
    });
    GameController.MONTH_NAME = ['正月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
    GameController.SEASON_NAME = ['春', '夏', '秋', '冬'];
    GameController.TIME_NAME = ['清晨', '正午', '傍晚'];
    return GameController;
}());
window["GameController"] = GameController;
__reflect(GameController.prototype,"GameController",[]); 


/***/ }),

/***/ "./src/LoadingUI.ts":
/***/ (function(module, exports) {

//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = /** @class */ (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
window["LoadingUI"] = LoadingUI;
__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]); 


/***/ }),

/***/ "./src/Main.ts":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./src/AssetAdapter.ts");
__webpack_require__("./src/DataAccess.ts");
__webpack_require__("./src/GameController.ts");
__webpack_require__("./src/LoadingUI.ts");
__webpack_require__("./src/Main.ts");
__webpack_require__("./src/Platform.ts");
__webpack_require__("./src/PlayerPrefs.ts");
__webpack_require__("./src/ResUtils.ts");
__webpack_require__("./src/Scene/BasicCharaItem.ts");
__webpack_require__("./src/Scene/Court.ts");
__webpack_require__("./src/Scene/GuanzhiBiao.ts");
__webpack_require__("./src/Scene/ImageButton.ts");
__webpack_require__("./src/Scene/ImageLabel.ts");
__webpack_require__("./src/Scene/Palace.ts");
__webpack_require__("./src/Scene/Preload.ts");
__webpack_require__("./src/Scene/SetName.ts");
__webpack_require__("./src/Scene/Start.ts");
__webpack_require__("./src/Scene/TableControl.ts");
__webpack_require__("./src/Scene/TempScene.ts");
__webpack_require__("./src/Scene/TestScene.ts");
__webpack_require__("./src/SceneManager.ts");
__webpack_require__("./src/TableManager.ts");
__webpack_require__("./src/ThemeAdapter.ts");
__webpack_require__("./src/Utils.ts");
__webpack_require__("./src/bean/City.ts");
__webpack_require__("./src/bean/Country.ts");
__webpack_require__("./src/bean/Guanyuan.ts");
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var app = window['app']; 
var app;
(function (app) {
    var Main = /** @class */ (function (_super) {
        __extends(Main, _super);
        function Main() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Main.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            egret.lifecycle.addLifecycleListener(function (context) {
                // custom lifecycle plugin
            });
            egret.lifecycle.onPause = function () {
                egret.ticker.pause();
            };
            egret.lifecycle.onResume = function () {
                egret.ticker.resume();
            };
        };
        Main.prototype.runGame = function () {
            return __awaiter(this, void 0, void 0, function () {
                var result, userInfo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.loadResource()];
                        case 1:
                            _a.sent();
                            this.createGameScene();
                            return [4 /*yield*/, RES.getResAsync("description_json")];
                        case 2:
                            result = _a.sent();
                            this.startAnimation(result);
                            return [4 /*yield*/, platform.login()];
                        case 3:
                            _a.sent();
                            return [4 /*yield*/, platform.getUserInfo()];
                        case 4:
                            userInfo = _a.sent();
                            console.log(userInfo);
                            console.log('in rungame');
                            return [2 /*return*/];
                    }
                });
            });
        };
        Main.prototype.loadResource = function () {
            return __awaiter(this, void 0, void 0, function () {
                var loadingView, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 4, , 5]);
                            loadingView = new LoadingUI();
                            this.stage.addChild(loadingView);
                            return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.loadTheme()];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                        case 3:
                            _a.sent();
                            this.stage.removeChild(loadingView);
                            return [3 /*break*/, 5];
                        case 4:
                            e_1 = _a.sent();
                            console.error(e_1);
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        Main.prototype.loadTheme = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                // load skin theme configuration file, you can manually modify the file. And replace the default skin.
                //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
                var theme = new eui.Theme("resource/default.thm.json", _this.stage);
                theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                    resolve();
                }, _this);
            });
        };
        /**
         * 创建场景界面
         * Create scene interface
         */
        Main.prototype.createGameScene = function () {
            //inject the custom material parser
            //注入自定义的素材解析器
            var assetAdapter = new AssetAdapter();
            egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
            egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
            this.runGame().catch(function (e) {
                console.log(e);
            });
            var start = SceneManager.getInstance();
            this.addChild(start);
            //this.addChild(new TestScene());
        };
        /**
         * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
         * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
         */
        Main.prototype.createBitmapByName = function (name) {
            var result = new egret.Bitmap();
            var texture = RES.getRes(name);
            result.texture = texture;
            return result;
        };
        /**
         * 描述文件加载成功，开始播放动画
         * Description file loading is successful, start to play the animation
         */
        Main.prototype.startAnimation = function (result) {
            var _this = this;
            var parser = new egret.HtmlTextParser();
            var textflowArr = result.map(function (text) { return parser.parse(text); });
            var textfield = this.textfield;
            var count = -1;
            var change = function () {
                count++;
                if (count >= textflowArr.length) {
                    count = 0;
                }
                var textFlow = textflowArr[count];
                // 切换描述内容
                // Switch to described content
                textfield.textFlow = textFlow;
                var tw = egret.Tween.get(textfield);
                tw.to({ "alpha": 1 }, 200);
                tw.wait(2000);
                tw.to({ "alpha": 0 }, 200);
                tw.call(change, _this);
            };
            change();
        };
        return Main;
    }(eui.UILayer));
    app.Main = Main;
    __reflect(Main.prototype,"app.Main",[]); 
})(app || (app = {}));
window["app"] = app;


/***/ }),

/***/ "./src/Platform.ts":
/***/ (function(module, exports) {

var DebugPlatform = /** @class */ (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
window["DebugPlatform"] = DebugPlatform;
__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]); 
if (!window.platform) {
    window.platform = new DebugPlatform();
}


/***/ }),

/***/ "./src/PlayerPrefs.ts":
/***/ (function(module, exports) {

/**
 * 游戏存档
 */
var PlayerPrefs = /** @class */ (function () {
    function PlayerPrefs() {
        this.guanyuans = new Array();
        this.guojias = new Array();
        this.chengsis = new Array();
        this.newGame();
    }
    PlayerPrefs.getInstance = function () {
        if (PlayerPrefs.instance == null)
            PlayerPrefs.instance = new PlayerPrefs();
        return PlayerPrefs.instance;
    };
    PlayerPrefs.prototype.newGame = function () {
        var newgame_setting = GameController.getInstance().Newgame_setting;
        // for (let i = 0; i < newgame_setting.length; i++) {
        //     console.log(newgame_setting[i]);
        // }
    };
    PlayerPrefs.prototype.save = function () {
        var json = JSON.stringify(this);
        this.localAccess.save_key('game', json);
    };
    PlayerPrefs.prototype.load = function () {
        var json = this.localAccess.get_key('game');
        var t1 = JSON.parse(json);
    };
    return PlayerPrefs;
}());
window["PlayerPrefs"] = PlayerPrefs;
__reflect(PlayerPrefs.prototype,"PlayerPrefs",[]); 


/***/ }),

/***/ "./src/ResUtils.ts":
/***/ (function(module, exports) {

/**
 * 资源加载
 * 支持单个或多个资源组加载
 */
var ResUtils = /** @class */ (function () {
    /**
     * 构造函数
     */
    function ResUtils() {
        this.groups = {};
        console.log('in Resutils');
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceLoadProgress, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
    }
    ResUtils.getInstance = function () {
        if (this.instance == null) {
            this.instance = new ResUtils();
        }
        return this.instance;
    };
    /**
     * 加载资源组，静默加载(无回调函数)
     * @group 资源组(支持字符串和数组)
     */
    ResUtils.prototype.loadGroupQuiet = function (group) {
        var groupName = this.combGroupName(group);
        RES.loadGroup(groupName);
    };
    /**
     * 加载资源组，带加载完成回调
     * @group 资源组(支持字符串和数组)
     * @onComplete 加载完成回调
     * @thisObject 回调执行对象
     * @priority 优先级
     */
    ResUtils.prototype.loadGroup = function (group, onComplete, thisObject, priority) {
        if (priority === void 0) { priority = 1; }
        var groupName = this.combGroupName(group);
        this.groups[groupName] = [onComplete, null, thisObject];
        RES.loadGroup(groupName);
    };
    /**
     * 加载资源组，带加载进度
     * @group 资源组(支持字符串和数组)
     * @onComplete 加载完成回调
     * @onProgress 加载进度回调
     * @thisObject 回调执行对象
     */
    ResUtils.prototype.loadGroupWithPro = function (group, onComplete, onProgress, thisObject) {
        var groupName = this.combGroupName(group);
        this.groups[groupName] = [onComplete, onProgress, thisObject];
        RES.loadGroup(groupName);
    };
    /**
     * 组合资源组名。单个资源组直接返回。多个资源组则重新命名。
     * @group 新资源组名
     */
    ResUtils.prototype.combGroupName = function (group) {
        if (typeof (group) == "string") {
            return group;
        }
        else {
            var len = group.length;
            var groupName = "";
            for (var i = 0; i < len; i++) {
                groupName += group[i];
            }
            RES.createGroup(groupName, group, false); //是否覆盖已经存在的同名资源组,默认 false
            return groupName;
        }
    };
    /**
     * 资源组加载完成
     */
    ResUtils.prototype.onResourceLoadComplete = function (event) {
        var groupName = event.groupName;
        console.log("资源组加载完成:" + groupName);
        if (this.groups[groupName]) {
            var loadComplete = this.groups[groupName][0];
            var loadCompleteTarget = this.groups[groupName][2];
            if (loadComplete != null) {
                loadComplete.call(loadCompleteTarget);
            }
            this.groups[groupName] = null;
            delete this.groups[groupName];
        }
    };
    /**
     * 资源组加载进度
     */
    ResUtils.prototype.onResourceLoadProgress = function (event) {
        var groupName = event.groupName;
        if (this.groups[groupName]) {
            var loadProgress = this.groups[groupName][1];
            var loadProgressTarget = this.groups[groupName][2];
            if (loadProgress != null) {
                loadProgress.call(loadProgressTarget, event);
            }
        }
    };
    /**
     * 资源组加载失败
     */
    ResUtils.prototype.onResourceLoadError = function (event) {
        console.log(event.groupName + "资源组有资源加载失败");
        this.onResourceLoadComplete(event);
    };
    return ResUtils;
}());
window["ResUtils"] = ResUtils;
__reflect(ResUtils.prototype,"ResUtils",[]); 


/***/ }),

/***/ "./src/Scene/BasicCharaItem.ts":
/***/ (function(module, exports) {

var BasicCharaItem = /** @class */ (function (_super) {
    __extends(BasicCharaItem, _super);
    function BasicCharaItem() {
        var _this = _super.call(this) || this;
        _this.tableManager = TableManager.getInstance();
        _this.width = _this.tableManager.width;
        _this.maxWidth = _this.width;
        return _this;
    }
    BasicCharaItem.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    BasicCharaItem.prototype.dataChanged = function () {
        if (!this.data)
            return;
        this.removeChildren();
        var group = new eui.Group();
        var layout = new eui.HorizontalLayout();
        layout.gap = 2;
        group.layout = layout;
        group.left = 0;
        group.right = 0;
        group.height = 40;
        this.addChild(group);
        var total = this.width - 80 * 3 - layout.gap * this.data.values.length;
        var avg = total / (this.data.values.length - 3);
        for (var i = 0; i < this.data.values.length; i++) {
            var lbl = new eui.Label();
            lbl.fontFamily = "KaiTi";
            lbl.background = true;
            if (BasicCharaItem.even)
                lbl.backgroundColor = 0xb2b295;
            else
                lbl.backgroundColor = 0xDADABD;
            lbl.size = 20;
            lbl.text = this.data.values[i];
            lbl.height = 40;
            lbl.verticalAlign = "middle";
            lbl.textAlign = 'center';
            if (i < 2)
                lbl.width = 80;
            else
                lbl.width = avg;
            group.addChild(lbl);
        }
        var btn = new eui.Button();
        if (this.data.operation != null)
            btn.label = this.data.operation;
        else
            btn.label = '确认';
        btn.height = 40;
        btn.width = 80;
        group.addChild(btn);
        BasicCharaItem.even = !BasicCharaItem.even;
    };
    BasicCharaItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    BasicCharaItem.even = true;
    return BasicCharaItem;
}(eui.ItemRenderer));
window["BasicCharaItem"] = BasicCharaItem;
__reflect(BasicCharaItem.prototype,"BasicCharaItem",["eui.UIComponent"]); 


/***/ }),

/***/ "./src/Scene/Court.ts":
/***/ (function(module, exports) {

var Court = /** @class */ (function (_super) {
    __extends(Court, _super);
    function Court() {
        var _this = _super.call(this) || this;
        _this.type_name = ['奏', '吏', '户', '礼', '兵', '刑', '工', '军', '退'];
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.complete, _this);
        return _this;
    }
    Court.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Court.prototype.complete = function () {
        this.conf = GameController.getInstance().Conf;
        for (var i = 0; i < this.conf.length; i++) {
            var component = this.group_type.getChildAt(i);
            component.setContent(this.conf[i]['type']);
            component.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tap_type, this);
        }
        GameController.getInstance().playWansui();
        this.group_detail.removeChildren();
    };
    Court.prototype.tap_type = function (e) {
        var component = e.currentTarget;
        switch (component.getContent()) {
            case '奏':
                break;
            case '退':
                this.group_detail.removeChildren();
                SceneManager.getInstance().gotoScene(SceneManager.SCENE_PALACE);
                break;
            default:
                this.group_detail.removeChildren();
                for (var i = 0; i < this.conf.length; i++) {
                    if (this.conf[i]['type'] == component.getContent()) {
                        for (var _i = 0, _a = this.conf[i]['detail']; _i < _a.length; _i++) {
                            var detail = _a[_i];
                            var com_detail = new ImageLabel();
                            com_detail.setContent(detail);
                            com_detail.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tap_detail, this);
                            this.group_detail.addChildAt(com_detail, 0);
                        }
                        break;
                    }
                }
        }
    };
    Court.prototype.tap_detail = function (e) {
        var component = e.currentTarget;
        switch (component.getContent()) {
            case '官职表':
                SceneManager.getInstance().gotoScene(SceneManager.SCENE_GUANZHIBIAO);
                break;
            case '调换官员':
                SceneManager.getInstance().gotoScene(SceneManager.SCENE_DIAOHUAN);
                break;
            default:
                break;
        }
    };
    Court.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        // for (let i = 0; i < this.group_type.numChildren; i++) {
        // 	let component = <ImageLabel> this.group_type.getChildAt(i);
        // 	component.setContent(this.type_name[i]);
        // }
    };
    return Court;
}(eui.Component));
window["Court"] = Court;
__reflect(Court.prototype,"Court",["eui.UIComponent"]); 


/***/ }),

/***/ "./src/Scene/GuanzhiBiao.ts":
/***/ (function(module, exports) {

var GuanzhiBiao = /** @class */ (function (_super) {
    __extends(GuanzhiBiao, _super);
    function GuanzhiBiao(_type) {
        if (_type === void 0) { _type = '查看'; }
        var _this = _super.call(this) || this;
        _this.type = _type;
        _this.addEventListener(egret.Event.COMPLETE, _this.onComplete, _this);
        return _this;
    }
    GuanzhiBiao.prototype.onComplete = function (event) {
        var sourceArr = [];
        for (var i = 1; i < 50; i++) {
            var role = Guanyuan.generateRole();
            for (var guanzhimapKey in Guanyuan.GUANZHIMAP) {
                if (Math.random() > 0.8) {
                    role.guanzhi = guanzhimapKey;
                    break;
                }
            }
            var _values = [role.name, role.guanzhi, role.wuli.toString(), role.zhili.toString(), role.tongsuai.toString(), role.zhengzhi.toString(),
                '44', '55', '77'];
            sourceArr.push({ label: "item" + i, operation: this.type, values: _values });
        }
        var header = ['姓名', '官职', '武力', '智力', '统帅', '政治', '魅力', '体力', '体能', '操作'];
        //用ArrayCollection包装
        var myCollection = new eui.ArrayCollection(sourceArr);
        this.tableGuanzhi.collection = myCollection;
        this.tableGuanzhi.header = header;
        this.btnReturn.setContent('返回');
        this.btnReturn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tap, this);
    };
    GuanzhiBiao.prototype.tap = function (e) {
        SceneManager.getInstance().gotoScene(SceneManager.SCENE_COURT);
    };
    GuanzhiBiao.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GuanzhiBiao.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return GuanzhiBiao;
}(eui.Component));
window["GuanzhiBiao"] = GuanzhiBiao;
__reflect(GuanzhiBiao.prototype,"GuanzhiBiao",["eui.UIComponent"]); 


/***/ }),

/***/ "./src/Scene/ImageButton.ts":
/***/ (function(module, exports) {

var ImageButton = /** @class */ (function (_super) {
    __extends(ImageButton, _super);
    function ImageButton() {
        var _this = _super.call(this) || this;
        _this.lbl = '户';
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.complete, _this);
        return _this;
    }
    ImageButton.prototype.complete = function () {
        this.content.text = this.lbl;
        this.removeEventListener(eui.UIEvent.COMPLETE, this.complete, this);
    };
    ImageButton.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    ImageButton.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    ImageButton.prototype.setContent = function (_content) {
        this.lbl = _content;
        if (this.content != null)
            this.content.text = _content;
    };
    ImageButton.prototype.getContent = function () {
        return this.content.text;
    };
    return ImageButton;
}(eui.Component));
window["ImageButton"] = ImageButton;
__reflect(ImageButton.prototype,"ImageButton",["eui.UIComponent"]); 


/***/ }),

/***/ "./src/Scene/ImageLabel.ts":
/***/ (function(module, exports) {

var ImageLabel = /** @class */ (function (_super) {
    __extends(ImageLabel, _super);
    function ImageLabel() {
        var _this = _super.call(this) || this;
        _this.lbl = '户';
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.complete, _this);
        return _this;
    }
    ImageLabel.prototype.complete = function () {
        this.content.text = this.lbl;
        this.removeEventListener(eui.UIEvent.COMPLETE, this.complete, this);
    };
    ImageLabel.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    ImageLabel.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    ImageLabel.prototype.setContent = function (_content) {
        this.lbl = _content;
        if (this.content != null)
            this.content.text = _content;
    };
    ImageLabel.prototype.getContent = function () {
        return this.content.text;
    };
    ImageLabel.prototype.setSize = function (width, height) {
        this.width = width;
        this.height = height;
    };
    return ImageLabel;
}(eui.Component));
window["ImageLabel"] = ImageLabel;
__reflect(ImageLabel.prototype,"ImageLabel",["eui.UIComponent"]); 


/***/ }),

/***/ "./src/Scene/Palace.ts":
/***/ (function(module, exports) {

var Palace = /** @class */ (function (_super) {
    __extends(Palace, _super);
    function Palace() {
        return _super.call(this) || this;
    }
    Palace.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Palace.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.lblDong.text = GameController.getInstance().getTime();
        this.lblInfo.text = GameController.getInstance().curRole.toString();
        this.lblXuanzheng.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gotoScene, this);
    };
    Palace.prototype.gotoScene = function (e) {
        SceneManager.getInstance().gotoScene(SceneManager.SCENE_COURT);
        GameController.getInstance().spendTime();
    };
    return Palace;
}(eui.Component));
window["Palace"] = Palace;
__reflect(Palace.prototype,"Palace",["eui.UIComponent"]); 


/***/ }),

/***/ "./src/Scene/Preload.ts":
/***/ (function(module, exports) {

var Preload = /** @class */ (function (_super) {
    __extends(Preload, _super);
    function Preload() {
        return _super.call(this) || this;
    }
    Preload.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Preload.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        var res = ResUtils.getInstance();
        res.loadGroupWithPro("preload", function () { console.log("login load complete"); SceneManager.getInstance().gotoScene(SceneManager.SCENE_START); }, function (e) { console.log("login progress", e.itemsLoaded, e.itemsTotal); }, this);
    };
    return Preload;
}(eui.Component));
window["Preload"] = Preload;
__reflect(Preload.prototype,"Preload",["eui.UIComponent"]); 


/***/ }),

/***/ "./src/Scene/SetName.ts":
/***/ (function(module, exports) {

var SetName = /** @class */ (function (_super) {
    __extends(SetName, _super);
    function SetName() {
        return _super.call(this) || this;
    }
    SetName.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    SetName.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.lblNext.addEventListener(egret.TouchEvent.TOUCH_TAP, this.create_role, this);
    };
    SetName.prototype.create_role = function (e) {
        var role = new Guanyuan(16, this.txtName.text, Guanyuan.QUALITY_ZHI);
        var control = GameController.getInstance();
        control.curRole = role;
        control.国号 = this.txtCountry.text.trim();
        control.年号 = this.txtName.text.trim();
        SceneManager.getInstance().gotoScene(SceneManager.SCENE_PALACE);
    };
    return SetName;
}(eui.Component));
window["SetName"] = SetName;
__reflect(SetName.prototype,"SetName",["eui.UIComponent"]); 


/***/ }),

/***/ "./src/Scene/Start.ts":
/***/ (function(module, exports) {

var Start = /** @class */ (function (_super) {
    __extends(Start, _super);
    function Start() {
        return _super.call(this) || this;
        //this.visible= false;
        //RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onConfigComplete, this);
    }
    Start.prototype.onConfigComplete = function (event) {
        console.log('资源初始化成功');
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onConfigComplete, this);
        this.visible = true;
    };
    Start.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Start.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.lblStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tap_start, this);
        this.lblContinue.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tap_music, this);
    };
    Start.prototype.tap_start = function (e) {
        SceneManager.getInstance().gotoScene(SceneManager.SCENE_SETNAME);
    };
    Start.prototype.tap_music = function (e) {
        GameController.getInstance().playBGM();
    };
    return Start;
}(eui.Component));
window["Start"] = Start;
__reflect(Start.prototype,"Start",["eui.UIComponent"]); 


/***/ }),

/***/ "./src/Scene/TableControl.ts":
/***/ (function(module, exports) {

var TableControl = /** @class */ (function (_super) {
    __extends(TableControl, _super);
    function TableControl() {
        var _this = _super.call(this) || this;
        _this.ascend = true;
        _this.width = TableManager.getInstance().width;
        _this.maxWidth = _this.width;
        _this.addEventListener(egret.Event.COMPLETE, _this.onComplete, _this);
        return _this;
    }
    Object.defineProperty(TableControl.prototype, "collection", {
        get: function () {
            return this._collection;
        },
        set: function (value) {
            this._collection = value;
            this.list.dataProvider = this.collection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableControl.prototype, "header", {
        get: function () {
            return this._header;
        },
        set: function (values) {
            this._header = values;
            this.groupHeader.removeChildren();
            var total = this.width - 80 * 3;
            var avg = (total - 2 * values.length) / (values.length - 3);
            for (var i = 0; i < values.length; i++) {
                var lbl = new eui.Label();
                lbl.name = i.toString();
                lbl.fontFamily = "KaiTi";
                lbl.background = true;
                lbl.backgroundColor = 0xA04C45;
                lbl.size = 20;
                lbl.text = values[i];
                lbl.height = 40;
                lbl.verticalAlign = "middle";
                lbl.textAlign = 'center';
                if (i < 2 || i == values.length - 1)
                    lbl.width = 80;
                else
                    lbl.width = avg;
                this.groupHeader.addChild(lbl);
                lbl.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sortCollection, this);
            }
        },
        enumerable: false,
        configurable: true
    });
    TableControl.prototype.sortCollection = function (e) {
        var component = e.currentTarget;
        var index = parseInt(component.name);
        var coll = this._collection;
        if (this.ascend)
            if (this._header[index] == '官职')
                coll.source.sort(function (n1, n2) {
                    var v1 = Guanyuan.GUANZHIMAP[n1['values'][index]];
                    var v2 = Guanyuan.GUANZHIMAP[n2['values'][index]];
                    if (v1 == undefined)
                        v1 = 100;
                    if (v2 == undefined)
                        v2 = 100;
                    return v1 - v2;
                });
            else
                coll.source.sort(function (n1, n2) { return parseInt(n1['values'][index]) - parseInt(n2['values'][index]); });
        else
            coll.source.reverse();
        this.ascend = !this.ascend;
        this.collection = null;
        this.collection = coll;
    };
    TableControl.prototype.onComplete = function (event) {
        this.list = new eui.List();
        this.list.dataProvider = this.collection;
        this.scroller.addChild(this.list);
        this.scroller.viewport = this.list;
        this.list.percentWidth = 100;
        this.list.selectedIndex = 1;
        this.list.itemRenderer = BasicCharaItem;
        this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTap, this);
    };
    TableControl.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    TableControl.prototype.onTap = function (e) {
        //获取点击消息
        console.log(this.list.selectedItem, this.list.selectedIndex);
    };
    TableControl.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return TableControl;
}(eui.Component));
window["TableControl"] = TableControl;
__reflect(TableControl.prototype,"TableControl",["eui.UIComponent"]); 


/***/ }),

/***/ "./src/Scene/TempScene.ts":
/***/ (function(module, exports) {

var TempScene = /** @class */ (function (_super) {
    __extends(TempScene, _super);
    function TempScene() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.COMPLETE, _this.onAddToStage, _this);
        return _this;
    }
    TempScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    TempScene.prototype.onAddToStage = function (event) {
        //先创建一个数组
        var sourceArr = [];
        for (var i = 1; i < 50; i++) {
            var role = new Guanyuan(12, '张三' + i.toString());
            var _values = [role.name, '丞相', role.wuli.toString(), role.zhili.toString(), role.tongsuai.toString(), role.zhengzhi.toString(),
                '44', '55', '77'];
            sourceArr.push({ label: "item" + i, num: "num=" + Math.ceil(Math.random() * 100), values: _values });
        }
        //用ArrayCollection包装
        var myCollection = new eui.ArrayCollection(sourceArr);
        // let dataGroup = new eui.DataGroup();
        // dataGroup.dataProvider = myCollection;
        // dataGroup.percentWidth = 100;
        // dataGroup.percentHeight = 100;
        // dataGroup.useVirtualLayout = true;//性能优化，避免创建过多对象实例
        // dataGroup.itemRenderer = LabelRenderer;
        // this.scroller.viewport = dataGroup;
        this.list = new eui.List();
        this.list.dataProvider = myCollection;
        this.scroller.addChild(this.list);
        this.scroller.viewport = this.list;
        this.list.percentWidth = 100;
        this.list.selectedIndex = 1;
        this.list.itemRenderer = BasicCharaItem;
        this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTap, this);
    };
    TempScene.prototype.onTap = function (e) {
        //获取点击消息
        console.log(this.list.selectedItem, this.list.selectedIndex);
    };
    TempScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return TempScene;
}(eui.Component));
window["TempScene"] = TempScene;
__reflect(TempScene.prototype,"TempScene",["eui.UIComponent"]); 


/***/ }),

/***/ "./src/Scene/TestScene.ts":
/***/ (function(module, exports) {

var TestScene = /** @class */ (function (_super) {
    __extends(TestScene, _super);
    function TestScene() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.COMPLETE, _this.onComplete, _this);
        return _this;
    }
    TestScene.prototype.onComplete = function (event) {
        var sourceArr = [];
        for (var i = 1; i < 50; i++) {
            var role = new Guanyuan(12, '张三' + i.toString());
            var _values = [role.name, '丞相', role.wuli.toString(), role.zhili.toString(), role.tongsuai.toString(), role.zhengzhi.toString(),
                '44', '55', '77'];
            sourceArr.push({ label: "item" + i, num: "num=" + Math.ceil(Math.random() * 100), values: _values });
        }
        var header = ['姓名', '官职', '武力', '智力', '统帅', '政治', '魅力', '体力', '体能', '操作'];
        //用ArrayCollection包装
        var myCollection = new eui.ArrayCollection(sourceArr);
        this.tableControl.collection = myCollection;
        this.tableControl.header = header;
    };
    TestScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    TestScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return TestScene;
}(eui.Component));
window["TestScene"] = TestScene;
__reflect(TestScene.prototype,"TestScene",["eui.UIComponent"]); 


/***/ }),

/***/ "./src/SceneManager.ts":
/***/ (function(module, exports) {

var SceneManager = /** @class */ (function (_super) {
    __extends(SceneManager, _super);
    function SceneManager() {
        var _this = _super.call(this) || this;
        _this.start = new Start();
        _this.setname = new SetName();
        _this.palace = new Palace();
        _this.court = new Court();
        _this.guanzhibiao = new GuanzhiBiao();
        _this.diaohuan = new GuanzhiBiao('选择');
        _this.preload = new Preload();
        _this.addChild(_this.preload);
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
            case SceneManager.SCENE_START:
                this.addChild(this.start);
                break;
            case SceneManager.SCENE_SETNAME:
                this.addChild(this.setname);
                break;
            case SceneManager.SCENE_PALACE:
                this.addChild(this.palace);
                break;
            case SceneManager.SCENE_COURT:
                this.addChild(this.court);
                break;
            case SceneManager.SCENE_GUANZHIBIAO:
                this.addChild(this.guanzhibiao);
                break;
            case SceneManager.SCENE_DIAOHUAN:
                this.addChild(this.diaohuan);
                break;
            case SceneManager.SCENE_PRELOAD:
                this.addChild(this.preload);
                break;
        }
    };
    SceneManager.SCENE_START = 'start';
    SceneManager.SCENE_SETNAME = 'setname';
    SceneManager.SCENE_PALACE = 'palace';
    SceneManager.SCENE_COURT = 'court';
    SceneManager.SCENE_GUANZHIBIAO = 'guanzhibiao';
    SceneManager.SCENE_DIAOHUAN = 'diaohuan';
    SceneManager.SCENE_PRELOAD = 'preload';
    return SceneManager;
}(egret.DisplayObjectContainer));
window["SceneManager"] = SceneManager;
__reflect(SceneManager.prototype,"SceneManager",[]); 


/***/ }),

/***/ "./src/TableManager.ts":
/***/ (function(module, exports) {

/**
 * @create 2022-02-01 20:13:06
 */
var TableManager = /** @class */ (function () {
    function TableManager() {
        this._width = 800;
    }
    Object.defineProperty(TableManager.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableManager.prototype, "operation", {
        get: function () {
            return this._operation;
        },
        set: function (value) {
            this._operation = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableManager.prototype, "titles", {
        get: function () {
            return this._titles;
        },
        set: function (value) {
            this._titles = value;
        },
        enumerable: false,
        configurable: true
    });
    TableManager.getInstance = function () {
        if (TableManager.instance == null)
            TableManager.instance = new TableManager();
        return TableManager.instance;
    };
    return TableManager;
}());
window["TableManager"] = TableManager;
__reflect(TableManager.prototype,"TableManager",[]); 


/***/ }),

/***/ "./src/ThemeAdapter.ts":
/***/ (function(module, exports) {

//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var ThemeAdapter = /** @class */ (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        var _this = this;
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else if (typeof generateEUI2 !== 'undefined') {
            RES.getResByUrl("resource/gameEui.json", function (data, url) {
                window["JSONParseClass"]["setData"](data);
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateEUI2);
                }, _this);
            }, this, RES.ResourceItem.TYPE_JSON);
        }
        else if (typeof generateJSON !== 'undefined') {
            if (url.indexOf(".exml") > -1) {
                var dirPath = url.replace(".exml", "_EUI.json");
                if (!generateJSON.paths[url]) {
                    RES.getResByUrl(dirPath, function (data) {
                        window["JSONParseClass"]["setData"](data);
                        egret.callLater(function () {
                            onSuccess.call(thisObject, generateJSON.paths[url]);
                        }, _this);
                    }, this, RES.ResourceItem.TYPE_JSON);
                }
                else {
                    egret.callLater(function () {
                        onSuccess.call(thisObject, generateJSON.paths[url]);
                    }, this);
                }
            }
            else {
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateJSON);
                }, this);
            }
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
window["ThemeAdapter"] = ThemeAdapter;
__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]); 


/***/ }),

/***/ "./src/Utils.ts":
/***/ (function(module, exports) {

/**
 * @create 2022-01-27 12:51:42
 */
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
     * 生成[Min, Max]之间的随机数, 生成机制存在问题,导致Min与Max取数的概率只有其他数值的一半.
     * @param Min 最小值
     * @param Max 最大值
     */
    Utils.getRandomNum = function (Min, Max) {
        if (Min === void 0) { Min = 0; }
        var range = Max - Min;
        var rand = Math.random();
        return (Min + Math.round(rand * range));
    };
    Utils.getRandomName = function (female) {
        if (female === void 0) { female = false; }
        var name = '';
        name = name + this.SURNAME[this.getRandomNum(0, this.SURNAME.length)];
        if (Math.random() > 0.5)
            name = name + this.MID_NAME[this.getRandomNum(0, this.MID_NAME.length)];
        if (female)
            name = name + this.FEMALE_NAME[this.getRandomNum(0, this.FEMALE_NAME.length)];
        else
            name = name + this.MALE_NAME[this.getRandomNum(0, this.MALE_NAME.length)];
        return name;
    };
    Utils.getGUID = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    Utils.digitToChinese = function (digit) {
        var chnNum = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
        var chnNumUnit = ["", "十", "百", "千"];
        var tmp = "";
        var chnString = "";
        var zero = true;
        var unitIndex = 0;
        var isTen = false;
        if (digit > 9 && digit < 20) {
            isTen = true;
        }
        while (digit > 0) {
            var num = digit % 10;
            if (num === 0) {
                if (!zero) {
                    zero = true;
                    chnString = chnNum[num] + chnString;
                }
            }
            else {
                zero = false;
                if (isTen && unitIndex == 1) {
                    tmp = "";
                }
                else {
                    tmp = chnNum[num];
                }
                tmp += chnNumUnit[unitIndex];
                chnString = tmp + chnString;
            }
            unitIndex++;
            digit = Math.floor(digit / 10);
        }
        return chnString;
    };
    Utils.SURNAME = '王,李,张,刘,陈,杨,黄,赵,吴,周,徐,孙,马,朱,胡,郭,何,林,高,罗,郑,梁,谢,宋,唐,许,韩,邓,冯,曹,王,李,张,刘,陈,杨,黄,赵,吴,周,徐,孙,马,朱,胡,郭,何,林,高,罗,郑,梁,谢,宋,唐,许,韩,邓,冯,曹,王,李,张,刘,陈,杨,黄,赵,吴,周,徐,孙,马,朱,胡,郭,何,林,高,罗,郑,梁,谢,宋,唐,许,韩,邓,冯,曹,彭,曾,肖,田,董,潘,袁,蔡,蒋,余,于,杜,叶,程,魏,苏,吕,丁,任,卢,姚,沈,钟,姜,崔,谭,陆,范,汪,廖,彭,曾,肖,田,董,潘,袁,蔡,蒋,余,于,杜,叶,程,魏,苏,吕,丁,任,卢,姚,沈,钟,姜,崔,谭,陆,范,汪,廖,石,金,韦,贾,夏,付,方,邹,熊,白,孟,秦,邱,侯,江,尹,薛,闫,段,雷,龙,黎,史,陶,贺,毛,郝,顾,龚,邵,万,覃,武,钱,戴,严,莫,孔,向,常,欧阳,诸葛,司马,司徒,轩辕,皇甫,慕容,端木,上官,夏侯'.split(',');
    Utils.FEMALE_NAME = '媛,丹,莹,凝,霏,霄,钰,艳,妤,姝,芹,颖,韵,芝,婵,秋,灿,娥,霁,菁,真,蝶,雁,贞,希,姗,虹,妍,颖,素,莲,莎,梅,芳,琳,英,瑶,芬,荷,雅,雅,凌,馨,若,仟,璐,秋,筱,泺,珺,丹,丽,妍,素,筠,素,英,颖,婧,双,芯,凝,菱,婧,媚,紫,初,苑,珞,恬,纤,玫,梅,铃,滟,妙,菡,璐,童,璇,洁,馥,馨,昕,彤,如,卉,雪,秀,娟,英,华,慧,巧,美,娜,静,淑,惠,珠,翠,雅,芝,玉,萍,红,娥,玲,芬,芳,燕,彩,春,菊,兰,凤,洁,梅,琳,素,云,莲,真,环,雪,荣,爱,妹,霞,香,月,莺,媛,艳,瑞,凡,佳,嘉,琼,勤,珍,贞,莉,桂,娣,叶,璧,璐,娅,琦,晶,妍,茜,秋,珊,莎,锦,黛,青,倩,婷,姣,婉,娴,瑾,颖,露,瑶,怡,婵,雁,蓓,纨,仪,荷,丹,蓉,眉,君,琴,蕊,薇,菁,梦,岚,苑,婕,馨,瑗,琰,韵,融,园,艺,咏,卿,聪,澜,纯,毓,悦,昭,冰,爽,琬,茗,羽,希,宁,欣,飘,育,滢,馥,筠,柔,竹,霭,凝,晓,欢,霄,枫,芸,菲,寒,伊,亚,宜,可,姬,舒,影,荔,枝,思,丽,贤,淑,德,慧,贞,卿,端,庄,静,秀, 嘉,琼,桂,娣,叶,璧,璐,娅,琦,晶,妍,茜,秋,珊,莎,锦,黛,青,倩,婷,姣,婉,娴,瑾,颖,露,瑶,怡,婵,雁,蓓,纨,仪,荷,丹,蓉,眉,君,琴,蕊,薇,菁,梦,岚,苑,婕,馨,瑗,琰,韵,融,园,艺,咏,卿,聪,澜,纯,毓,悦,昭,冰,爽,琬,茗,羽,希,宁,欣,飘,育,滢,馥,筠,柔,竹,霭,凝,晓,欢,霄,枫,芸,菲,寒,伊,亚,宜,可,姬,舒,影,荔,枝,思,丽,秀,娟,英,华,慧,巧,美,娜,静,淑,惠,珠,翠,雅,芝,玉,萍,红,娥,玲,芬,芳,燕,彩,春,菊,勤,珍,贞,莉,兰,凤,洁,梅,琳,素,云,莲,真,环,雪,荣,爱,妹,霞,香,月,莺,媛,艳,瑞,凡,佳'.split(',');
    Utils.MALE_NAME = '伟,刚,勇,毅,俊,峰,强,军,平,保,东,文,辉,力,明,永,健,世,广,志,义,兴,良,海,山,仁,波,宁,贵,福,生,龙,元,全,国,胜,学,祥,才,发,武,新,利,清,飞,彬,富,顺,信,子,杰,涛,昌,成,康,星,光,天,达,安,岩,中,茂,进,林,有,坚,和,彪,博,诚,先,敬,震,振,壮,会,思,群,豪,心,邦,承,乐,绍,功,松,善,厚,庆,磊,民,友,裕,河,哲,江,超,浩,亮,政,谦,亨,奇,固,之,轮,翰,朗,伯,宏,言,若,鸣,朋,斌,梁,栋,维,启,克,伦,翔,旭,鹏,泽,晨,辰,士,以,建,家,致,树,炎,德,行,时,泰,盛,雄,琛,钧,冠,策,腾,楠,榕,风,航,弘,仁,义,礼,智,信,勇,忠,孝,温,良,恭,谦,诚,涛,昌,进,林,有,坚,和,彪,博,诚,先,敬,震,振,壮,会,群,豪,心,邦,承,乐,绍,功,松,善,厚,庆,磊,民,友,裕,河,哲,江,超,浩,亮,政,谦,亨,奇,固,之,轮,翰,朗,伯,宏,言,若,鸣,朋,斌,梁,栋,维,启,克,伦,翔,旭,鹏,泽,晨,辰,士,以,建,家,致,树,炎,德,行,时,泰,盛,雄,琛,钧,冠,策,腾,伟,刚,勇,毅,俊,峰,强,军,平,保,东,文,辉,力,明,永,健,世,广,志,义,兴,良,海,山,仁,波,宁,贵,福,生,龙,元,全,国,胜,学,祥,才,发,成,康,星,光,天,达,安,岩,中,茂,武,新,利,清,飞,彬,富,顺,信,子,杰,楠,榕,风,航,弘'.split(',');
    Utils.MID_NAME = '子,凡,悦,思,奕,易,坚,莎,耘,国,仑,良,裕,融,致,德,卿,桂,钊,钧,铎,铭,皑,柏,镇,淇,淳,一,洁,茹,清,吉,克,先,依,浩,亮,允,元,源,渊,和,函,妤,宜,云,琪,菱,宣,沂,健,信,媛,凯,欣,可,洋,萍,荣,榕,含,佑,明,雄,芝,英,义,卿,乾,亦,雅,芝,萱,昊,芸,天,岚,昕,尧,鸿,棋,琳,宸,乔,丞,安,毅,凌,惠,珠,泉,坤,恒,渝,菁,龄,弘,佩,勋,宁,元,栋,嘉,哲,俊,博,维,泰,乐,佳,涵,晋,逸,沅,海,圣,亚,宜,可,姬,舒,谚,娅,琦,苓,汉,娥,玲,芬,芳,燕,彩,月,美,心,茗,丹,森,学,轩,叶,璧,璐,娣,阳,彬,泓,伊,烨,书,诗,蔚'.split(',');
    return Utils;
}());
window["Utils"] = Utils;
__reflect(Utils.prototype,"Utils",[]); 


/***/ }),

/***/ "./src/bean/City.ts":
/***/ (function(module, exports) {

var City = /** @class */ (function () {
    function City() {
    }
    return City;
}());
window["City"] = City;
__reflect(City.prototype,"City",[]); 


/***/ }),

/***/ "./src/bean/Country.ts":
/***/ (function(module, exports) {

var Country = /** @class */ (function () {
    function Country() {
        this.cities = new Array();
    }
    Country.CUR_PLAYER = 'CUR_PLAYER';
    return Country;
}());
window["Country"] = Country;
__reflect(Country.prototype,"Country",[]); 


/***/ }),

/***/ "./src/bean/Guanyuan.ts":
/***/ (function(module, exports) {

var Guanyuan = /** @class */ (function () {
    function Guanyuan(_age, _name, _quality) {
        var _this = this;
        if (_quality === void 0) { _quality = Guanyuan.QUALITY_BAI; }
        this.guanzhi = '赋闲'; //官职
        this.suoshu = Country.CUR_PLAYER; //所属, 默认就是当前玩家
        this.male = true; //性别男
        this.toString = function () {
            return "\u667A\u529B\uFF1A" + _this.zhili + "  \u6B66\u529B\uFF1A" + _this.wuli + "  \u7EDF\u5E05\uFF1A" + _this.tongsuai + "\n\n\u9B45\u529B\uFF1A" + _this.meili + "  \u653F\u6CBB\uFF1A" + _this.zhengzhi + "  ";
        };
        this.age = _age;
        this.birthYear = GameController.getInstance().year - _age;
        this.name = _name;
        this.id = Utils.getGUID();
    }
    Guanyuan.generateRole = function (_quality) {
        if (_quality === void 0) { _quality = Guanyuan.QUALITY_BAI; }
        var age = Utils.getRandomNum(16, 40);
        var name = Utils.getRandomName();
        var role = new Guanyuan(age, name);
        var min_death = GameController.getInstance().year + 10;
        var max_death = Math.max(role.birthYear + 100, min_death);
        role.deadYear = Utils.getRandomNum(min_death, max_death); //至少要活10年啊
        var min = Math.max(_quality - 30, 40);
        role.zhili = Utils.getRandomNum(min, _quality);
        role.wuli = Utils.getRandomNum(min, _quality);
        role.tongsuai = Utils.getRandomNum(min, _quality);
        role.zhengzhi = Utils.getRandomNum(min, _quality);
        role.meili = Utils.getRandomNum(min, _quality);
        role.qinglian = Utils.getRandomNum(min, 85);
        role.zhongcheng = Utils.getRandomNum(50, 90);
        role.juewei = '无';
        switch (_quality) {
            case Guanyuan.QUALITY_BAI:
                role.quality = '白';
                break;
            case Guanyuan.QUALITY_LAN:
                role.quality = '蓝';
                break;
            case Guanyuan.QUALITY_ZHI:
                role.quality = '紫';
                break;
            case Guanyuan.QUALITY_CHENG:
                role.quality = '橙';
                break;
        }
        role.real = false;
        return role;
    };
    Guanyuan.prototype.get_age = function () {
        var num = GameController.getInstance().year - this.birthYear;
        return Math.floor(num);
    };
    Guanyuan.GUANZHIMAP = {
        "丞相": 0,
        "中央将军": 1,
        "吏部尚书": 2,
        "户部尚书": 3,
        "礼部尚书": 4,
        "兵部尚书": 5,
        "刑部尚书": 6,
        "工部尚书": 7,
        "赋闲": 10000,
    };
    Guanyuan.QUALITY_BAI = 60; //不同品质的武将,其素质上限都有所影响
    Guanyuan.QUALITY_LAN = 70;
    Guanyuan.QUALITY_ZHI = 80;
    Guanyuan.QUALITY_CHENG = 90;
    return Guanyuan;
}());
window["Guanyuan"] = Guanyuan;
__reflect(Guanyuan.prototype,"Guanyuan",[]); 


/***/ })

/******/ });