import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { WatchTowerHeaderComponent } from './header/header.component';
import { WatchTowerFooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    WatchTowerHeaderComponent,
    WatchTowerFooterComponent,
    DashboardComponent,
    EditPostComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    QuillModule],
  exports: [
    WatchTowerHeaderComponent,
    WatchTowerFooterComponent,
    DashboardComponent,
    EditPostComponent
  ],
})
export class WatchTowerModule {}
