import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroImgComponent } from './hero-img/hero-img.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { ProjectGlanceComponent } from './project-glance/project-glance.component';
import { OurProductComponent } from './our-product/our-product.component';
import { KnownAbtUsComponent } from './known-abt-us/known-abt-us.component';
import { INewsComponent } from './i-news/i-news.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { RouterModule, Routes } from '@angular/router';
import { MediaComponent } from './media/media.component';
import { ProductComponent } from './product/product.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MemberComponent } from './member/member.component';

@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent,
		HeroImgComponent,
		WhatWeDoComponent,
		ProjectGlanceComponent,
		OurProductComponent,
		KnownAbtUsComponent,
		INewsComponent,
		TestimonialComponent,
		MediaComponent,
		ProductComponent,
		ContactUsComponent,
		MemberComponent
	],
	imports: [ BrowserModule, CommonModule, RouterModule ],
	exports: [
		HeaderComponent,
		FooterComponent,
		HeroImgComponent,
		WhatWeDoComponent,
		ProjectGlanceComponent,
		OurProductComponent,
		KnownAbtUsComponent,
		INewsComponent,
		TestimonialComponent,
		MediaComponent,
		ProductComponent,
		ContactUsComponent,
		MemberComponent
	]
})
export class ShareModule {}
