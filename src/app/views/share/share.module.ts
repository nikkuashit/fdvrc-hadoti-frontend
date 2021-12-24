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
import { AboutComponent } from './about/about.component';
import { EngageWithUsComponent } from './engage-with-us/engage-with-us.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';
import { AccordionModule } from 'primeng/accordion';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

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
		MemberComponent,
		AboutComponent,
		ProjectUpdateComponent,
		EngageWithUsComponent
	],
	imports: [ BrowserModule, CommonModule, RouterModule, AccordionModule, CarouselModule, ButtonModule ],
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
		MemberComponent,
		AboutComponent,
		EngageWithUsComponent,
		ProjectUpdateComponent
	]
})
export class ShareModule {}
