import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videos: Video[] = myVideos;
  // selectedVideo: any;

  constructor() { }

  ngOnInit() {
  }

  selectVideo(video) {
    // this.selectedVideo = video;
    console.log('got video', video);

    for (let i = 0; i < this.videos.length; i++) {
      this.videos[i].selected = false;
    }

    video.selected = true;
  }

  /*isSelected(video) {
    if (this.selectedVideo === video) {
      return 'active';
    }
  }*/
}

/*class Video implements Video {
  selected?: boolean;
}*/

interface Video {
  selected?: boolean;
  title: string;
  author: string;
  id: string;
  viewDetails: VideoViewDetails[];
}

interface VideoViewDetails {
  age: number;
  region: string;
  date: string;
}

const myVideos = [
  {
    'title': 'Angular Observable Data Flow',
    'author': 'Kyle Cordes',
    'id': 'JPuqluYYa-o',
    'viewDetails': [
      {
        'age': 17,
        'region': 'North America',
        'date': '2016-03-23'
      }, {
        'age': 27,
        'region': 'North America',
        'date': '2016-03-23'
      }, {
        'age': 37,
        'region': 'North America',
        'date': '2016-03-23'
      }, {
        'age': 47,
        'region': 'Europe',
        'date': '2016-03-24'
      }, {
        'age': 37,
        'region': 'North America',
        'date': '2016-03-24'
      }, {
        'age': 17,
        'region': 'North America',
        'date': '2016-03-25'
      }
    ]
  },
  {
    'title': 'Angular Live Coding',
    'author': 'Kyle Cordes',
    'id': 'CkK1BT6mMAw',
    'viewDetails': [
      {
        'age': 36,
        'region': 'North America',
        'date': '2016-06-23'
      }, {
        'age': 30,
        'region': 'North America',
        'date': '2016-06-23'
      }, {
        'age': 54,
        'region': 'North America',
        'date': '2016-07-23'
      }, {
        'age': 43,
        'region': 'Europe',
        'date': '2016-0-24'
      }, {
        'age': 32,
        'region': 'North America',
        'date': '2016-08-24'
      }, {
        'age': 32,
        'region': 'North America',
        'date': '2016-08-25'
      }
    ]
  },
  {
    'title': 'Managing State in Angular',
    'author': 'Kyle Cordes',
    'id': 'eBLTz8QRg4Q',
    'viewDetails': [
      {
        'age': 17,
        'region': 'North America',
        'date': '2016-03-23'
      }, {
        'age': 27,
        'region': 'North America',
        'date': '2016-03-23'
      }, {
        'age': 37,
        'region': 'North America',
        'date': '2016-03-23'
      }, {
        'age': 47,
        'region': 'Europe',
        'date': '2016-03-24'
      }, {
        'age': 37,
        'region': 'North America',
        'date': '2016-03-24'
      }, {
        'age': 17,
        'region': 'North America',
        'date': '2016-03-25'
      }
    ]
  },
  {
    'title': 'Modl Buildr',
    'author': 'Paul Spears',
    'id': '4ENpTiHKyi4',
    'viewDetails': [
      {
        'age': 36,
        'region': 'North America',
        'date': '2016-06-23'
      }, {
        'age': 30,
        'region': 'North America',
        'date': '2016-06-23'
      }, {
        'age': 54,
        'region': 'North America',
        'date': '2016-07-23'
      }, {
        'age': 43,
        'region': 'Europe',
        'date': '2016-0-24'
      }, {
        'age': 32,
        'region': 'North America',
        'date': '2016-08-24'
      }, {
        'age': 32,
        'region': 'North America',
        'date': '2016-08-25'
      }
    ]
  },
    {
    'title': 'ngConf 2015',
    'author': 'Oasis Digital Solutions Inc.',
    'id': 'NQOCQq6PLQg',
    'viewDetails': [
      {
        'age': 17,
        'region': 'North America',
        'date': '2016-03-23'
      }, {
        'age': 27,
        'region': 'North America',
        'date': '2016-03-23'
      }, {
        'age': 37,
        'region': 'North America',
        'date': '2016-03-23'
      }, {
        'age': 47,
        'region': 'Europe',
        'date': '2016-03-24'
      }, {
        'age': 37,
        'region': 'North America',
        'date': '2016-03-24'
      }, {
        'age': 17,
        'region': 'North America',
        'date': '2016-03-25'
      }
    ]
  }
];