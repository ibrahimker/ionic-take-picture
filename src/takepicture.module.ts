import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonictakepictureComponent } from './components/ionictakepicture.component';
import { IonictakepictureProvider } from './providers/Ionictakepicture.provider';
import { IonicModule } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';
 
@NgModule({
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
})
export class IonicTakePictureModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: IonicTakePictureModule,
            providers: [IonictakepictureProvider]
        };
    }
}