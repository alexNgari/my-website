import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditPostComponent } from './edit-post/edit-post.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, DashboardComponent, EditPostComponent],
  imports: [
    CommonModule
  ]
})
export class WatchTowerModule { }
