import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ShareModule } from '../share/share.module';

import { BrowserModule } from '@angular/platform-browser';
import { CoreDetailComponent } from './core-detail/core-detail.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    CoreDetailComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    BrowserModule
  ],
})
export class CoreModule { }
