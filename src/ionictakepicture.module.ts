import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
import { IonictakepictureComponent } from './components/ionictakepicture.component';
import { IonictakepictureProvider } from './providers/Ionictakepicture.provider';
import { IonicModule } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';
 
@NgModule({
    imports: [
        // Only if you use elements like ion-content, ion-xyz...
        IonicModule,
        CommonModule,
        BrowserModule
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
export class IonictakepicturewrapperModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: IonictakepicturewrapperModule,
            providers: [IonictakepictureProvider]
        };
    }
}