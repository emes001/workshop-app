import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videos = [ 'Super Cool Video', 'Rad Video', 'Even better video' ];

  constructor() { }

  ngOnInit() {
  }

}
