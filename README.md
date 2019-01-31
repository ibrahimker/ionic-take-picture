# Ionic Take Picture (Camera Plugin Wrapper)
This is an ionic 4 plugin to take picture from device camera. This plugin is based on [ionic native camera plugin](https://beta.ionicframework.com/docs/native/camera/).

![Example](https://raw.githubusercontent.com/ibrahimker/ionic-take-picture/master/img/screenshot.png)

# Disclaimer
This project was tested in ionic 4.0.0 for my personal purposes

## How to use

1. Install the plugin
```
npm install ionictakepicture
```

2. Import and add in app.module.ts
```
....
import { IonictakepicturewrapperModule,IonictakepictureProvider } from 'ionictakepicture';
....
```

2. In app.module.ts, add the module and provider to imports and providers sections
```
imports {
....
IonicTakePictureModule,
....
}

providers [
....
IonictakepictureProvider,
....
]
```

3. In component.module.ts, import and export the component
```
...
import { IonicTakePictureModule, IonictakepictureComponent } from 'ionictakepicture';
...
imports:[
IonicTakePictureModule
]
...
exports: [
...
IonictakepictureComponent,
...
]
```

4. Use it in respective html like this: 
```
<ion-takepicture [(ngModel)]="pictureData"></ion-takepicture>

//Base 64 image of the pictureData
<p>{{pictureData}}</p>
```

4. You can also use it with optional options. Detail parameter you can find on [this](https://beta.ionicframework.com/docs/native/camera/) page: 
```
<ion-takepicture [(ngModel)]="pictureData" [targetWidth]="300" [targetHeight]="300" [saveToPhotoAlbum]="true" [cameraDirection]="0" [destinationType]="0" [encodingType]="0" [mediaType]="0" [quality]="80"></ion-takepicture>

//Base 64 image of the pictureData
<p>{{pictureData}}</p>
```