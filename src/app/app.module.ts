import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { Camera } from "@ionic-native/Camera/ngx";
import { File } from "@ionic-native/file/ngx";
import { Crop } from "@ionic-native/crop/ngx";
import { Base64 } from "@ionic-native/base64/ngx";
import { Clipboard } from "@ionic-native/clipboard/ngx";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    File,
    Camera,
    Crop,
    Base64,
    Clipboard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
