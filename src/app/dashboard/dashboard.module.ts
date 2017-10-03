import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';

import { Routes, RouterModule } from '@angular/router';
import { VideoListItemComponent } from './video-list-item/video-list-item.component';

const dashboardRoutes: Routes = [
  { path: '', component: VideoDashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    HttpClientModule
  ],
  exports: [RouterModule],
  declarations: [VideoDashboardComponent, VideoListComponent, VideoPlayerComponent, StatFiltersComponent, VideoListItemComponent]
})
export class DashboardModule { }
