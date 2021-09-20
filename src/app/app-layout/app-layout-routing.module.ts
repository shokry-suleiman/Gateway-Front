import { AppLayoutComponent } from './app-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '', component: AppLayoutComponent, children: [
			{ path: 'gateways', loadChildren: () => import('./../gateway/gateway.module').then(m => m.GatewayModule) },
			{ path: '', redirectTo: 'gateways', pathMatch: 'full' },
			{ path: '**', redirectTo: 'gateways' },
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
