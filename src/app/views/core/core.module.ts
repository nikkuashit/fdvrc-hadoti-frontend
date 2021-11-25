import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ShareModule } from '../share/share.module';

import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    LandingPageComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    BrowserModule
  ],
})
export class CoreModule { }
