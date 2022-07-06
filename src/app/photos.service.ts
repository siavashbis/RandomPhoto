import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface unsplashresponse {
  urls: {
    regular: string;
  };
}
@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}
  getphoto() {
    return this.http.get<unsplashresponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID PYOpeCOONmoe3jvOnHbZ0FPYpr7iTEptulrGhafv79Y',
      },
    });
  }
}
