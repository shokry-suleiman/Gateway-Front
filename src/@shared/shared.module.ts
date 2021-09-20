import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GatewayItemComponent } from './components/gateway-item/gateway-item.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
	declarations: [
		GatewayItemComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		MatDialogModule,
		FormsModule,
		ReactiveFormsModule
	],
	exports: [
		GatewayItemComponent,
		MatDialogModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers:[ReactiveFormsModule,FormBuilder]
})
export class SharedModule { }
