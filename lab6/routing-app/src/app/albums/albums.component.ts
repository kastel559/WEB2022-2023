import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from "../albums";

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
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });
  }
  delete(album: Album): void {
    const index = this.albums.indexOf(album);
    if (index !== -1) {
      this.albums.splice(index, 1);
    }
  }

}
