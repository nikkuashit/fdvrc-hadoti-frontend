import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './views/core/core.module';
// import { FooterComponent } from './views/share/footer/footer.component';
// import { HeaderComponent } from './views/share/header/header.component';
import { ShareModule } from './views/share/share.module';

@NgModule({
	declarations: [
		AppComponent
		// HeaderComponent,
		// FooterComponent,
	],
	imports: [ BrowserModule, CommonModule, AppRoutingModule, ShareModule, CoreModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
