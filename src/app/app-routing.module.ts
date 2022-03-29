import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngageWithUsComponent } from './views/share/engage-with-us/engage-with-us.component';
import { AboutComponent } from './views/share/about/about.component';
import { ProjectUpdateComponent } from './views/share/project-update/project-update.component';
import { MediaComponent } from './views/share/media/media.component';
import { ProductComponent } from './views/share/product/product.component';
import { MemberComponent } from './views/share/member/member.component';
import { ContactUsComponent } from './views/share/contact-us/contact-us.component';
import { LandingPageComponent } from '../app/views/core/landing-page/landing-page.component';
import { CoreDetailComponent } from './views/core/core-detail/core-detail.component';

const routes: Routes = [
	{ path: '', component: LandingPageComponent },
	{ path: 'home', component: LandingPageComponent },
	{ path: ':id', component: CoreDetailComponent, pathMatch: 'full' },
	{ path: 'engage-with-us', component: EngageWithUsComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'project-update', component: ProjectUpdateComponent },
	{ path: 'media', component: MediaComponent },
	{ path: 'product', component: ProductComponent },
	{ path: 'member', component: MemberComponent },
	{ path: 'contact-us', component: ContactUsComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'top' }) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
