import { Component, OnInit } from '@angular/core';
import { Video } from '../../common/data-types';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {

  currentVideo: Video;

  constructor() {}

  ngOnInit() {
  }

  setVideo(video: Video) {
    console.log('dashboard got video from child', video);
    this.currentVideo = video;
  }

}
