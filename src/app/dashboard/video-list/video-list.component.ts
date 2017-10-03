import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Video } from '../../common/data-types';
import { myVideos } from '../../video-data';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Output() setCurrentVideo = new EventEmitter<Video>();

  videos: Video[];

  constructor(http: HttpClient) {
    http.get<Video[]>('http://localhost:8085/videos').subscribe(videoData => this.videos = videoData);
  }

  ngOnInit() {
  }

  selectVideo(video) {

    for (let i = 0; i < this.videos.length; i++) {
      this.videos[i].selected = false;
    }

    video.selected = true;
    this.setCurrentVideo.emit(video);
  }
}
