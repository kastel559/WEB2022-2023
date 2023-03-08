import { Component } from '@angular/core';
import {Album} from "../albums";
import {Photos} from "../photos";
import { AlbumsService } from '../albums.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent {
  album: Album;
  photos: Photos[];
  constructor(private route: ActivatedRoute, private albumService: AlbumsService) {
    this.album = {} as Album;
    this.photos = {} as Photos[];
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        let _id = params.get('id');
        if (_id) {
          let id = +_id;
          this.albumService.getAlbum(id).subscribe(
            (response) => {
              this.album = response;
            },
            (error) => {
              console.log(error);
            }
          );
          this.albumService.getPhotos(id).subscribe(
            (response) => {
              this.photos = response;
            },
            (error) => {
              console.log(error);
            }
          );
        }
      }
    );
  }

  back() {
    window.location.href = `http://localhost:4200/albums/${this.album.id}`;
  }
}
