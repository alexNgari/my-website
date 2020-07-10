import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsComponent } from './skills/skills.component';
import { SummaryComponent } from './summary/summary.component';
import { SiteRoutingModule } from './site-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    SkillsComponent,
    SummaryComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule
  ],
  exports: [
    SkillsComponent,
    SummaryComponent
  ]
})
export class SiteModule { }
