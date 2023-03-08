import { Component, OnInit } from '@angular/core';
import { AlbumsService } from './albums.service';
import { Album } from "../../albums";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  albums: Album[];
  constructor(private albumsService: AlbumsService) {
    this.albums = [];
  }

  ngOnInit(): void {
    this.albums.getAlbums().subscribe(((response: Album[])) => {
      this.albums = response.slice(0, 10);
    }
    );
  }

}
