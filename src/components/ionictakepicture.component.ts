import { Component,Input, OnInit,ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ToastController,Platform } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

var HTMLTEMPLATE=`
<div *ngIf="pictureData == ''">
<ion-button (click)="takePicture()" color="warning" fill="outline" class="button-take-picture custom-color">
<img src="assets/general/TakePictureIcon.svg"/>
</ion-button>
</div>
<div *ngIf="pictureData != ''" style="display:grid;">
<img [src]="pictureData" class="image-container"/>
<ion-button shape="round" fill="outline" color="warning" class="two-button-container button-box-shadow retake-button-container custom-color" (click)="takePicture()">
<p class="notosans-bold lightblack no-margin border-width-secondary-button text-button">{{retake}}</p>
</ion-button>
</div>
`;
var STYLESHEET = `
.button-take-picture{
    --border-width: 2px;
    --border-radius: 16px;
    --height: 100px;
    --width: 100px;
    --box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
    --margin-top: 8px;
    --margin-bottom: 8px;
    --margin-start: 0;
    --margin-end: 0;
}
.retake-button-container{
    --width: 100px;
    --border-width: 2px;
    --box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
    --height: 32px;
    --margin-top: 0px;
    --margin-bottom: 0px;
    --margin-start: 0px;
    --margin-end: 0px; 
}
.two-button-container{
    --width:100px;
    --border-width: 2px;
    --box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
    --height: 40px;
    --margin-top: 0px;
    --margin-bottom: 0px;
    --margin-start: 0px;
    --margin-end: 0px; 
}
.button-box-shadow button.button-native{
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
}
.notosans-bold{
    font-family: 'NotoSans-Bold' !important;
}
.lightblack{
    color:#221e20;
}
.no-margin{
    margin:0;
}
.text-button{
    font-size: 14px;
    line-height: 1.29;
    text-transform: capitalize;
}`;
var CUSTOM_COLOR=`
.custom-color {
    --ion-color-warning:#FFD500;
}`

@Component({
    selector: 'ion-takepicture',
    template: HTMLTEMPLATE,
    styles: [STYLESHEET,CUSTOM_COLOR],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: IonictakepictureComponent,
        multi: true
    }]
})
export class IonictakepictureComponent implements OnInit,ControlValueAccessor {

    pictureData = '';
    cameraOptions: CameraOptions = {}
    retake='Retake'

    constructor(private camera: Camera,private toastController: ToastController,private plt: Platform) {
        this.cameraOptions = {
            quality: 80,
            saveToPhotoAlbum:false,
            cameraDirection: this.camera.Direction.BACK,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetHeight: 225,
            targetWidth:300
        }
    }

    @Input() set color(data: string) {
        CUSTOM_COLOR=".custom-color {--ion-color-warning:"+data+";}"
    }

    @Input() set targetWidth(data: number) {
        this.cameraOptions.targetWidth = data;
    }

    @Input() set saveToPhotoAlbum(data: boolean) {
        this.cameraOptions.saveToPhotoAlbum = data;
    }

    @Input() set cameraDirection(data: number) {
        this.cameraOptions.cameraDirection = data;
    }

    @Input() set destinationType(data: number) {
        this.cameraOptions.destinationType = data;
    }

    @Input() set encodingType(data: number) {
        this.cameraOptions.encodingType = data;
    }

    @Input() set mediaType(data: number) {
        this.cameraOptions.mediaType  = data;
    }

    @Input() set targetHeight(data: number) {
        this.cameraOptions.targetHeight = data;
    }

    @Input() set quality(data: number) {
        this.cameraOptions.quality = data;
    }

    @Input() set language(data: string) {
        this.retake = (data == 'ID') ? 'Ulangi' : 'Retake'
    }

    ngOnInit() {

    }

    private onTouch: Function = () => {};
    private disabled: boolean = false;

    onChange(data) {

    }

    // Allow Angular to set the value on the component
    writeValue(value): void {
        this.onChange(value)
        
    }

    // Save a reference to the change function passed to us by 
    // the Angular form control
    registerOnChange(fn): void {
        this.onChange = fn;
        
    }

    // Save a reference to the touched function passed to us by 
    // the Angular form control
    registerOnTouched(fn): void {
        this.onTouch = fn;
        
    }

    // Allow the Angular form control to disable this input
    setDisabledState(disabled: boolean): void {
        this.disabled = disabled;
    }

    takePicture(){
        this.pictureData='';
        this.camera.getPicture(this.cameraOptions).then((imageData) => {
            this.pictureData='data:image/jpeg;base64,' + imageData;
            this.writeValue(this.pictureData);
            // let base64Image = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            // Handle error
            if (this.plt.is('cordova')) {
                this.writeValue(this.pictureData);
            }
            else {
                this.presentToast("Can't Use Camera in browser. Use Dummy Data Instead","fail");
                this.pictureData = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCADhASwDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECCP/EABsQAQEBAQEBAQEAAAAAAAAAAAABQRExUSFh/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/AOVgFUQvp0ABEAAAQFRUBUFBFQAAAABUAAAFEAFQBQAEFAAAh6AC9QFVDqqIcVBABAEUBFARUAAAAAAAAAAAAAAAAAVAAVFAEUAAAEBRUAoAAAICggAAAAAAAAAAAAAAAAAAAAAAACoAqKAgoCoCgAACICiAqAAAAAAAAAAAAAAAAAAACoAAACooIqALUUAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAFQAAAABQFABARQBAAAAAAAAAAAAAAAAAAAAAAAAABUABUAVABQ0ACAAAIAAKgAAAAAAAAAAAAAAAAAAAAAAAAAAAqAoGqACACAqKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAKgoAAoAIAAIoAgAAAAAAAAAAAAAAAAAAAAAAAAoICgCANICgAgAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAKIAoIDQCqgCAAIAAAgAAKgAAAAAAAAAAAAAAAAAAAAAKICgAoCqIqAAIgAAigIqAAAAAAAAAAAAAAAAAKIAAAoigAAAA1f6i1FUSqAgoCAfiIAAAAIqACgIAAAAAAKgAAALgIqAKAAgoAAFA4DSLqK1QAQCoAAiAAAIAKAgqAAACoAKgAqACoAqAKigAAAAEDpqhqgKpfQWKlARClAEigiJhoAaAB9QAWIAAAKgAAAAAL8AEUAKQARcACemAoQBAUFV//9k=';
                this.writeValue(this.pictureData);
            }
        });
    }

    async presentToast(text,type) {
        let customClass = "toast-"+type;
        const toast = await this.toastController.create({
            message: text,
            cssClass: customClass,
            duration: 2000
        });
        toast.present();
    }
}
