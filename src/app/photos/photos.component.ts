import { Component, Input, OnInit } from '@angular/core';
import { TravelService } from '../travel.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  @Input() cityRef: string;
  photoData: any;
  randomNumber: number = Math.floor(Math.random() * 21);
  constructor(private service: TravelService) {}

  ngOnInit(): void {
    this.service.getPhotos(this.cityRef).subscribe((response) => {
      this.photoData = response;
    });
  }
}
