var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
import { Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ToastController, Platform } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';
var HTMLTEMPLATE = "\n<div *ngIf=\"pictureData == ''\">\n<ion-button (click)=\"takePicture()\" color=\"warning\" fill=\"outline\" class=\"button-take-picture custom-color\">\n<img src=\"assets/general/TakePictureIcon.svg\"/>\n</ion-button>\n</div>\n<div *ngIf=\"pictureData != ''\" style=\"display:grid;\">\n<img [src]=\"pictureData\" class=\"image-container\"/>\n<ion-button shape=\"round\" fill=\"outline\" color=\"warning\" class=\"two-button-container button-box-shadow retake-button-container custom-color\" (click)=\"takePicture()\">\n<p class=\"notosans-bold lightblack no-margin border-width-secondary-button text-button\">{{retake}}</p>\n</ion-button>\n</div>\n";
var STYLESHEET = "\n.button-take-picture{\n    --border-width: 2px;\n    --border-radius: 16px;\n    --height: 100px;\n    --width: 100px;\n    --box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);\n    --margin-top: 8px;\n    --margin-bottom: 8px;\n    --margin-start: 0;\n    --margin-end: 0;\n}\n.retake-button-container{\n    --width: 100px;\n    --border-width: 2px;\n    --box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);\n    --height: 32px;\n    --margin-top: 0px;\n    --margin-bottom: 0px;\n    --margin-start: 0px;\n    --margin-end: 0px; \n}\n.two-button-container{\n    --width:100px;\n    --border-width: 2px;\n    --box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);\n    --height: 40px;\n    --margin-top: 0px;\n    --margin-bottom: 0px;\n    --margin-start: 0px;\n    --margin-end: 0px; \n}\n.button-box-shadow button.button-native{\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);\n}\n.notosans-bold{\n    font-family: 'NotoSans-Bold' !important;\n}\n.lightblack{\n    color:#221e20;\n}\n.no-margin{\n    margin:0;\n}\n.text-button{\n    font-size: 14px;\n    line-height: 1.29;\n    text-transform: capitalize;\n}";
var CUSTOM_COLOR = "\n.custom-color {\n    --ion-color-warning:#FFD500;\n}";
var IonictakepictureComponent = /** @class */ (function () {
    function IonictakepictureComponent(camera, toastController, plt) {
        this.camera = camera;
        this.toastController = toastController;
        this.plt = plt;
        this.pictureData = '';
        this.cameraOptions = {};
        this.retake = 'Retake';
        this.onTouch = function () { };
        this.disabled = false;
        this.cameraOptions = {
            quality: 80,
            saveToPhotoAlbum: false,
            cameraDirection: this.camera.Direction.BACK,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetHeight: 225,
            targetWidth: 300
        };
    }
    Object.defineProperty(IonictakepictureComponent.prototype, "color", {
        set: function (data) {
            CUSTOM_COLOR = ".custom-color {--ion-color-warning:" + data + ";}";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonictakepictureComponent.prototype, "targetWidth", {
        set: function (data) {
            this.cameraOptions.targetWidth = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonictakepictureComponent.prototype, "saveToPhotoAlbum", {
        set: function (data) {
            this.cameraOptions.saveToPhotoAlbum = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonictakepictureComponent.prototype, "cameraDirection", {
        set: function (data) {
            this.cameraOptions.cameraDirection = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonictakepictureComponent.prototype, "destinationType", {
        set: function (data) {
            this.cameraOptions.destinationType = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonictakepictureComponent.prototype, "encodingType", {
        set: function (data) {
            this.cameraOptions.encodingType = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonictakepictureComponent.prototype, "mediaType", {
        set: function (data) {
            this.cameraOptions.mediaType = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonictakepictureComponent.prototype, "targetHeight", {
        set: function (data) {
            this.cameraOptions.targetHeight = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonictakepictureComponent.prototype, "quality", {
        set: function (data) {
            this.cameraOptions.quality = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonictakepictureComponent.prototype, "language", {
        set: function (data) {
            this.retake = (data == 'ID') ? 'Ulangi' : 'Retake';
        },
        enumerable: true,
        configurable: true
    });
    IonictakepictureComponent.prototype.ngOnInit = function () {
    };
    IonictakepictureComponent.prototype.onChange = function (data) {
    };
    // Allow Angular to set the value on the component
    IonictakepictureComponent.prototype.writeValue = function (value) {
        this.onChange(value);
    };
    // Save a reference to the change function passed to us by 
    // the Angular form control
    IonictakepictureComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    // Save a reference to the touched function passed to us by 
    // the Angular form control
    IonictakepictureComponent.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    // Allow the Angular form control to disable this input
    IonictakepictureComponent.prototype.setDisabledState = function (disabled) {
        this.disabled = disabled;
    };
    IonictakepictureComponent.prototype.takePicture = function () {
        var _this = this;
        this.pictureData = '';
        this.camera.getPicture(this.cameraOptions).then(function (imageData) {
            _this.pictureData = 'data:image/jpeg;base64,' + imageData;
            _this.writeValue(_this.pictureData);
            // let base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
            if (_this.plt.is('cordova')) {
                _this.writeValue(_this.pictureData);
            }
            else {
                _this.presentToast("Can't Use Camera in browser. Use Dummy Data Instead", "fail");
                _this.pictureData = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCADhASwDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECCP/EABsQAQEBAQEBAQEAAAAAAAAAAAABQRExUSFh/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/AOVgFUQvp0ABEAAAQFRUBUFBFQAAAABUAAAFEAFQBQAEFAAAh6AC9QFVDqqIcVBABAEUBFARUAAAAAAAAAAAAAAAAAVAAVFAEUAAAEBRUAoAAAICggAAAAAAAAAAAAAAAAAAAAAAACoAqKAgoCoCgAACICiAqAAAAAAAAAAAAAAAAAAACoAAACooIqALUUAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAFQAAAABQFABARQBAAAAAAAAAAAAAAAAAAAAAAAAABUABUAVABQ0ACAAAIAAKgAAAAAAAAAAAAAAAAAAAAAAAAAAAqAoGqACACAqKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAKgoAAoAIAAIoAgAAAAAAAAAAAAAAAAAAAAAAAAoICgCANICgAgAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAKIAoIDQCqgCAAIAAAgAAKgAAAAAAAAAAAAAAAAAAAAAKICgAoCqIqAAIgAAigIqAAAAAAAAAAAAAAAAAKIAAAoigAAAA1f6i1FUSqAgoCAfiIAAAAIqACgIAAAAAAKgAAALgIqAKAAgoAAFA4DSLqK1QAQCoAAiAAAIAKAgqAAACoAKgAqACoAqAKigAAAAEDpqhqgKpfQWKlARClAEigiJhoAaAB9QAWIAAAKgAAAAAL8AEUAKQARcACemAoQBAUFV//9k=';
                _this.writeValue(_this.pictureData);
            }
        });
    };
    IonictakepictureComponent.prototype.presentToast = function (text, type) {
        return __awaiter(this, void 0, void 0, function () {
            var customClass, toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        customClass = "toast-" + type;
                        return [4 /*yield*/, this.toastController.create({
                                message: text,
                                cssClass: customClass,
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    IonictakepictureComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ion-takepicture',
                    template: HTMLTEMPLATE,
                    styles: [STYLESHEET, CUSTOM_COLOR],
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: IonictakepictureComponent,
                            multi: true
                        }]
                },] },
    ];
    /** @nocollapse */
    IonictakepictureComponent.ctorParameters = function () { return [
        { type: Camera },
        { type: ToastController },
        { type: Platform }
    ]; };
    IonictakepictureComponent.propDecorators = {
        color: [{ type: Input }],
        targetWidth: [{ type: Input }],
        saveToPhotoAlbum: [{ type: Input }],
        cameraDirection: [{ type: Input }],
        destinationType: [{ type: Input }],
        encodingType: [{ type: Input }],
        mediaType: [{ type: Input }],
        targetHeight: [{ type: Input }],
        quality: [{ type: Input }],
        language: [{ type: Input }]
    };
    return IonictakepictureComponent;
}());
export { IonictakepictureComponent };
//# sourceMappingURL=ionictakepicture.component.js.map