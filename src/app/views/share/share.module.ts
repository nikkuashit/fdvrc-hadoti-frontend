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
// import { INewsComponent } from './i-news/i-news.component';
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
import { ComponentCenterEndComponent } from './component-center-end/component-center-end.component';
import { ComponentLeftEndComponent } from './component-left-end/component-left-end.component';
import { FullSliderComponent } from './full-slider/full-slider.component';
import { InfoCardCenterComponent } from './info-card-center/info-card-center.component';
import { CardSliderSquareComponent } from './card-slider-square/card-slider-square.component';
import { CardSliderCircleComponent } from './card-slider-circle/card-slider-circle.component';
import { LeftToRightComponent } from './left-to-right/left-to-right.component';
import { RightToLeftComponent } from './right-to-left/right-to-left.component';
import { SquareCardHoverComponent } from './square-card-hover/square-card-hover.component';
import { TeamMemberCardComponent } from './team-member-card/team-member-card.component';
import { FaqComponent } from './faq/faq.component';
import { ChartComponent } from './chart/chart.component';
import { ProgressNumberComponent } from './progress-number/progress-number.component';
import { CollapseComponent } from './collapse/collapse.component';
import { ProductEnquiryComponent } from './product-enquiry/product-enquiry.component';
import { NormalCardComponent } from './normal-card/normal-card.component';
import { BgimageContentComponent } from './bgimage-content/bgimage-content.component';
import { PositionComponent } from './position/position.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { TenderComponent } from './tender/tender.component';
import { OurPartnerComponent } from './our-partner/our-partner.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { PartnershipComponent } from './partnership/partnership.component';
import { LeftRightCardComponent } from './left-right-card/left-right-card.component';
import { TwoSectionComponent } from './two-section/two-section.component';
import { DownloadCardComponent } from './download-card/download-card.component';

@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent,
		HeroImgComponent,
		WhatWeDoComponent,
		ProjectGlanceComponent,
		OurProductComponent,
		KnownAbtUsComponent,
		// INewsComponent,
		TestimonialComponent,
		MediaComponent,
		ProductComponent,
		ContactUsComponent,
		MemberComponent,
		AboutComponent,
		ProjectUpdateComponent,
		EngageWithUsComponent,
		ComponentCenterEndComponent,
		ComponentLeftEndComponent,
		FullSliderComponent,
		InfoCardCenterComponent,
		CardSliderSquareComponent,
		CardSliderCircleComponent,
		LeftToRightComponent,
		RightToLeftComponent,
		SquareCardHoverComponent,
		TeamMemberCardComponent,
		FaqComponent,
		ChartComponent,
		ProgressNumberComponent,
		CollapseComponent,
		ProductEnquiryComponent,
		NormalCardComponent,
		BgimageContentComponent,
		PositionComponent,
		FileuploadComponent,
		TenderComponent,
		OurPartnerComponent,
		LatestNewsComponent,
		PartnershipComponent,
		LeftRightCardComponent,
		TwoSectionComponent,
		DownloadCardComponent
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
		// INewsComponent,
		TestimonialComponent,
		MediaComponent,
		ProductComponent,
		ContactUsComponent,
		MemberComponent,
		AboutComponent,
		EngageWithUsComponent,
		ProjectUpdateComponent,
		ComponentCenterEndComponent,
		ComponentLeftEndComponent,
		InfoCardCenterComponent,
		CardSliderSquareComponent,
		FullSliderComponent,
		CardSliderCircleComponent,
		LeftToRightComponent,
		RightToLeftComponent,
		SquareCardHoverComponent,
		TeamMemberCardComponent,
		FaqComponent,
		ChartComponent,
		ProgressNumberComponent,
		CollapseComponent,
		ProductEnquiryComponent,
		NormalCardComponent,
		BgimageContentComponent,
		PositionComponent,
		FileuploadComponent,
		TenderComponent,
		OurPartnerComponent,
		LatestNewsComponent,
		PartnershipComponent,
		LeftRightCardComponent,
		TwoSectionComponent,
		DownloadCardComponent
	]
})
export class ShareModule {}
