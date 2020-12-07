import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
})
export class MusicComponent implements OnInit {
  musicArray = [
    { city: 'https://open.spotify.com/embed/album/7hY8SWwT0V6HPLldPklhfW' },
  ];

  city: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((response) => {
      this.city = response.get('city');
      if (this.city === 'Detroit') {
        document.getElementById(
          'music'
        ).innerHTML = `<iframe src="https://open.spotify.com/embed/playlist/3xgUhjJuFLWYZfV4ZF7xqX" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
      } else if (this.city === 'Rome') {
        document.getElementById(
          'music'
        ).innerHTML = `<iframe src="https://open.spotify.com/embed/album/1qknnSwKGm0G6NqFcTN9Z2" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
      } else if (this.city === 'Rio de Janeiro') {
        document.getElementById(
          'music'
        ).innerHTML = `<iframe src="https://open.spotify.com/embed/album/53A8esSW3J4nfbZRXIFE4g" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
      } else if (this.city === 'Paris') {
        document.getElementById(
          'music'
        ).innerHTML = `<iframe src="https://open.spotify.com/embed/album/6X29j29MSmUWNFv3D4zKUN" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
      } else if (this.city === 'New York City') {
        document.getElementById(
          'music'
        ).innerHTML = `<iframe src="https://open.spotify.com/embed/playlist/7iBrrLgak0q3D8aC925z5j" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
      } else if (this.city === 'Bangkok') {
        document.getElementById(
          'music'
        ).innerHTML = `<iframe src="https://open.spotify.com/embed/album/2mjM2Sfb2h9NCVGqVwjWUE" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
      } else if (this.city === 'Tokyo') {
        document.getElementById(
          'music'
        ).innerHTML = `<iframe src="https://open.spotify.com/embed/album/53A8esSW3J4nfbZRXIFE4g" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
      } else if (this.city === 'New Delhi') {
        document.getElementById(
          'music'
        ).innerHTML = `<iframe src="https://open.spotify.com/embed/album/0zxQIs5SnAI5s4xnQeZj4U" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
      } else if (this.city === 'Madrid') {
        document.getElementById(
          'music'
        ).innerHTML = `<iframe src="https://open.spotify.com/embed/album/3FmYzL8wI4NRncJmyumzks" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
      } else if (this.city === 'Addis Ababa') {
        document.getElementById(
          'music'
        ).innerHTML = `<iframe src="https://open.spotify.com/embed/playlist/3PbUsKupCBj4MKlTgTuNKr" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
      }
    });
  }
}
