import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../common/data-types';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.css']
})
export class StatFiltersComponent implements OnInit {

  @Input() video: Video;

  constructor() { }

  ngOnInit() {
  }

}
