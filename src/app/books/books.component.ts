import { Component, Input, OnInit } from '@angular/core';
import { TravelService } from '../travel.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  @Input() cityBook: string;
  bookData: any;
  constructor(private service: TravelService) {}

  ngOnInit(): void {
    this.service.getBooks(this.cityBook).subscribe((response) => {
      this.bookData = response;
      console.log(this.bookData);
    });
  }
}
