import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Album} from "../albums";
import { AlbumsService } from '../albums.service';
@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album;
  newTitle: string;
  loaded: boolean;
  constructor(private route: ActivatedRoute, private albumService: AlbumsService) {
    this.album = {} as Album;
    this.newTitle = "";
    this.loaded = true;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if (_id) {
        let id = +_id;
        this.albumService.getAlbum(id).subscribe(
          (response) => {
            this.album = response;
          })
        this.loaded = false;
        this.albumService.getAlbum(id).subscribe((album) => {
          this.album = album;
          this.loaded = true;
        })
      }
    });
  }

  saveTitle() {
    this.albumService.updateAlbumTitle(this.album.id, this.newTitle).subscribe(
      (response) => {
        this.album.title = response.title;
        this.newTitle = "";
      }
    )
  }

  ReturnBack(){
    window.location.href = `http://localhost:4200/albums`;
  }

}
