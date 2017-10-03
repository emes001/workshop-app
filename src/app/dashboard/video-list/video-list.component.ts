import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Video } from '../../common/data-types';
import { myVideos } from '../../video-data';
import { VideoDataService } from '../../video-data.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Output() setCurrentVideo = new EventEmitter<Video>();

  videos: Video[];

  constructor(videoProvider: VideoDataService) {
    videoProvider.loadVideos().subscribe(videoData => this.videos = videoData);
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
