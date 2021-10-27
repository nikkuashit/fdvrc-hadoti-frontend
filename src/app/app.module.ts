import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/share/header/header.component';
import { FooterComponent } from './views/share/footer/footer.component';
import { HeroImgComponent } from './views/share/hero-img/hero-img.component';
import { WhatWeDoComponent } from './views/share/what-we-do/what-we-do.component';
import { ProjectGlanceComponent } from './views/share/project-glance/project-glance.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HeroImgComponent,
		WhatWeDoComponent,
		ProjectGlanceComponent
	],
	imports: [ BrowserModule, AppRoutingModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
