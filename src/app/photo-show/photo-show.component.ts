import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css'],
})
export class PhotoShowComponent implements OnInit {
  photourl: string | undefined;

  constructor(private photosservice: PhotosService) {
    this.fetchphoto()
  }
  onClick(){
    this.fetchphoto()
  }
  fetchphoto(){
    this.photosservice.getphoto().subscribe((response) => {
      this.photourl = response.urls.regular;
    });
  }
  ngOnInit(): void {}
}
