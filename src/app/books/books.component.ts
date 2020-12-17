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
  showIndex: number | null = null;
  constructor(private service: TravelService) {}

  ngOnInit(): void {
    this.service.getBooks(this.cityBook).subscribe((response) => {
      this.bookData = response;
      console.log(this.bookData);
    });
  }
  getBooks = () => {
    this.service.getBooks(this.cityBook).subscribe((response) => {
      this.bookData = response;
      console.log(this.bookData);
    });
  };
  loadMore = () => {
    this.service.getBooks(this.cityBook, '12').subscribe((response) => {
      this.bookData = response;
    });
  };
  pageThree = () => {
    this.service.getBooks(this.cityBook, '24').subscribe((response) => {
      this.bookData = response;
    });
  };

  toggleDisplay(index: number) {
    if (this.showIndex === index) {
      this.showIndex = null;
    } else {
      this.showIndex = index;
    }
  }
}
