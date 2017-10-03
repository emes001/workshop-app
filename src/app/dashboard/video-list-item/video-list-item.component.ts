import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../common/data-types';

@Component({
  selector: 'app-video-list-item',
  templateUrl: './video-list-item.component.html',
  styleUrls: ['./video-list-item.component.css']
})
export class VideoListItemComponent implements OnInit {

  @Input() video: Video;

  constructor() { }

  ngOnInit() {
  }

}
