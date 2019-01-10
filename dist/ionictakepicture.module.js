import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonictakepictureComponent } from './components/ionictakepicture.component';
import { IonictakepictureProvider } from './providers/ionictakepicture.provider';
import { IonicModule } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';
var IonictakepicturewrapperModule = /** @class */ (function () {
    function IonictakepicturewrapperModule() {
    }
    IonictakepicturewrapperModule.forRoot = function () {
        return {
            ngModule: IonictakepicturewrapperModule,
            providers: [IonictakepictureProvider]
        };
    };
    IonictakepicturewrapperModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        // Only if you use elements like ion-content, ion-xyz...
                        IonicModule,
                        CommonModule
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
    return IonictakepicturewrapperModule;
}());
export { IonictakepicturewrapperModule };
//# sourceMappingURL=ionictakepicture.module.js.map