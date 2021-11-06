import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngageWithUsComponent } from './views/share/engage-with-us/engage-with-us.component';
import { AboutComponent } from './views/share/about/about.component';
import { ProjectUpdateComponent } from './views/share/project-update/project-update.component';
import { MediaComponent } from './views/share/media/media.component';
import { LandingPageComponent } from '../app/views/core/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
	{ path: 'engage-with-us', component: EngageWithUsComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'product-update', component: ProjectUpdateComponent },
	{ path: 'media', component: MediaComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
