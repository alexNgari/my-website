import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DarkModeService } from './dark-mode.service';
import { SiteModule } from './site/site.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SiteModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DarkModeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
