import { NgModule } from '@angular/core';
import { IonictakepictureComponent } from './components/ionictakepicture.component';
import { IonictakepictureProvider } from './providers/Ionictakepicture.provider';
import { IonicModule } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';
var IonicTakePictureModule = /** @class */ (function () {
    function IonicTakePictureModule() {
    }
    IonicTakePictureModule.forRoot = function () {
        return {
            ngModule: IonicTakePictureModule,
            providers: [IonictakepictureProvider]
        };
    };
    IonicTakePictureModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        // Only if you use elements like ion-content, ion-xyz...
                        IonicModule
                    ],
                    declarations: [
                        // declare all components that your module uses
                        IonictakepictureComponent
                    ],
                    providers: [
                        Camera
                    ],
                    exports: [
                        // export the component(s) that you want others to be able to use
                        IonictakepictureComponent
                    ]
                },] },
    ];
    return IonicTakePictureModule;
}());
export { IonicTakePictureModule };
//# sourceMappingURL=takepicture.module.js.map