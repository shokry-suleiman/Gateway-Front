import { GatewayListComponent } from './gateway-list/gateway-list.component';
import { GatewayComponent } from './gateway.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GatewayDetailsComponent } from './gateway-details/gateway-details.component';

const routes: Routes = [
	{
		path: '', component: GatewayComponent, children: [
			{ path: '', component: GatewayListComponent },
			{ path: ':gatewayId', component: GatewayDetailsComponent }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class GatewayRoutingModule { }
