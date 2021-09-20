import { SharedModule } from './../../@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GatewayRoutingModule } from './gateway-routing.module';
import { GatewayComponent } from './gateway.component';
import { GatewayListComponent } from './gateway-list/gateway-list.component';
import { GatewayDetailsComponent } from './gateway-details/gateway-details.component';
import { GatewayAddDialogComponent } from './gateway-add-dialog/gateway-add-dialog.component';
import { DeviceAddDialogComponent } from './device-add-dialog/device-add-dialog.component';


@NgModule({
	declarations: [
		GatewayComponent,
		GatewayListComponent,
		GatewayDetailsComponent,
		GatewayAddDialogComponent,
		DeviceAddDialogComponent
	],
	imports: [
		CommonModule,
		GatewayRoutingModule,
		SharedModule
	]
})
export class GatewayModule { }
