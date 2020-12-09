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
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
  constructor(private service: TravelService) {}

  ngOnInit(): void {
    this.service.getPhotos(this.cityRef).subscribe((response) => {
      this.photoData = response;
      console.log(this.photoData);
    });
  }
}
