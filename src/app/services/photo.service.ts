import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { UserPhoto } from './userPhoto';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: UserPhoto[] = [];

  constructor() { }

  public async addNewToGallery(): Promise<void> {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });


    this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath!
    });
  }

}


