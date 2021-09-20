import { SharedModule } from './../../@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLayoutRoutingModule } from './app-layout-routing.module';
import { AppLayoutComponent } from './app-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
	declarations: [
		AppLayoutComponent,
		HeaderComponent,
		FooterComponent
	],
	imports: [
		CommonModule,
		AppLayoutRoutingModule,
		SharedModule
	]
})
export class AppLayoutModule { }
