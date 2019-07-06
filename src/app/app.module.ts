import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImageUploadModule } from './image-upload/image-upload.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImageUploadModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
