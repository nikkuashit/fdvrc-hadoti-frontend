import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/share/header/header.component';
import { FooterComponent } from './views/share/footer/footer.component';
import { HeroImgComponent } from './views/share/hero-img/hero-img.component';
import { WhatWeDoComponent } from './views/share/what-we-do/what-we-do.component';
import { ProjectGlanceComponent } from './views/share/project-glance/project-glance.component';
import { OurProductComponent } from './views/share/our-product/our-product.component';
import { KnownAbtUsComponent } from './views/share/known-abt-us/known-abt-us.component';
import { INewsComponent } from './views/share/i-news/i-news.component';
import { TestimonialComponent } from './views/share/testimonial/testimonial.component';
import { AboutComponent } from './views/share/about/about.component';
import { MediaComponent } from './views/share/media/media.component';
import { ProjectUpdateComponent } from './views/share/project-update/project-update.component';
import { EngageWithUsComponent } from './views/share/engage-with-us/engage-with-us.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HeroImgComponent,
		WhatWeDoComponent,
		ProjectGlanceComponent,
		OurProductComponent,
		KnownAbtUsComponent,
		INewsComponent,
		TestimonialComponent,
		AboutComponent,
		MediaComponent,
		ProjectUpdateComponent,
		EngageWithUsComponent
	],
	imports: [ BrowserModule, AppRoutingModule, YouTubePlayerModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
