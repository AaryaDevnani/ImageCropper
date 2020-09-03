import { Component } from "@angular/core";
import { Camera, CameraOptions } from "@ionic-native/Camera/ngx";
import { Crop } from "@ionic-native/crop/ngx";
import { File } from "@ionic-native/file/ngx";
import { ActionSheetController } from "@ionic/angular";
import { Base64 } from "@ionic-native/base64/ngx";
import { Clipboard } from "@ionic-native/clipboard/ngx";
import { Router } from "@angular/router";
import { ImageCroppedEvent } from "ngx-image-cropper";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  croppedImagepath = "";
  filePath: any = "";
  fileName: any = "";
  pathName: any = "";
  blob: any = "";
  base64Image: any = "";
  base64string: any = "";

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 60,
    targetHeight: 1024,
    targetWidth: 1024,
  };

  constructor(
    private camera: Camera,
    private crop: Crop,
    public actionSheetController: ActionSheetController,
    private file: File,
    private base64: Base64,
    private clipboard: Clipboard,
    private router: Router
  ) {}

  dateFormatter() {
    // this.router.navigate(["./date-formatter"]);
  }

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 60,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      mediaType: this.camera.MediaType.PICTURE,
      targetHeight: 1024,
      targetWidth: 1024,
      //saveToPhotoAlbum: true,
    };
    this.camera.getPicture(options).then(
      (imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
      },
      (err) => {
        alert("error: " + err);
      }
    );
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [
        {
          text: "Load from Library",
          handler: () => {
            this.pickImage(this.camera.DestinationType.DATA_URL);
          },
        },
        {
          text: "Use Camera",
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.CAMERA);
          },
        },
        {
          text: "Cancel",
          role: "cancel",
        },
      ],
    });
    await actionSheet.present();
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImagepath = event.base64;
    this.base64string = this.croppedImagepath;
  }
  savebase64str() {
    this.file.createFile(
      this.file.externalDataDirectory,
      "base64string.txt",
      true
    );
    this.file.readAsText(this.file.externalDataDirectory, "base64string.txt");
    this.blob = new Blob([this.base64string]);
    this.file
      .writeFile(
        this.file.externalDataDirectory,
        "base64string.txt",
        this.blob,
        { replace: true, append: false }
      )
      .then(() => {
        alert("File saved in internal storage/android/data/io.starter.ionic/");
      });
  }
  copy() {
    //console.log(this.base64string);
    this.clipboard.copy(this.base64string).then(() => {
      alert("Base 64 string has been copied to clipboard");
    });

    //this.clipboard.clear();
  }
}
