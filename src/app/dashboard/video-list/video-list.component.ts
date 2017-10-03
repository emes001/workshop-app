import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Video } from '../../common/data-types';
import { myVideos } from '../../video-data';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Output() setCurrentVideo = new EventEmitter<Video>();

  videos: Video[] = myVideos;

  constructor() { }

  ngOnInit() {
  }

  selectVideo(video) {

    console.log('got video', video);

    for (let i = 0; i < this.videos.length; i++) {
      this.videos[i].selected = false;
    }

    video.selected = true;
    this.setCurrentVideo.emit(video);
  }
}
