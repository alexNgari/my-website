import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { QuillModule } from 'ngx-quill';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DarkModeService } from './dark-mode.service';
import { SiteModule } from './site/site.module';
import { WatchTowerRoutingModule } from './watch-tower/watch-tower-routing.module';
import { WatchTowerModule } from './watch-tower/watch-tower.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    SiteModule,
    BrowserModule,
    AppRoutingModule,
    WatchTowerModule,
    WatchTowerRoutingModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
  ],
  providers: [DarkModeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
