import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './views/core/core.module';
import { ShareModule } from './views/share/share.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [ AppComponent ],
	imports: [ BrowserModule, CommonModule, AppRoutingModule, ShareModule, CoreModule, HttpClientModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
