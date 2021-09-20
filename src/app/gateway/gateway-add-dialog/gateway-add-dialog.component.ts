import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { GatewayService } from 'src/@resources/services/gateway/gateway.service';

@Component({
	selector: 'app-gateway-add-dialog',
	templateUrl: './gateway-add-dialog.component.html',
	styleUrls: ['./gateway-add-dialog.component.scss']
})
export class GatewayAddDialogComponent implements OnInit {

	gatewayForm: FormGroup = this.fb.group({
		name: ['', [Validators.required]],
		ipv4: ['', [Validators.required]]
	})
	isSubmitting: boolean = false;
	constructor(private fb: FormBuilder, private gatewayService: GatewayService, @Inject(MAT_DIALOG_DATA) public data: any,
		private dialogRef: MatDialogRef<GatewayAddDialogComponent>, private toastrService: ToastrService) { }

	ngOnInit(): void {

	}

	createGateway() {
		this.isSubmitting = true;
		this.gatewayService.createGateway(this.gatewayForm.value).subscribe((res: any) => {
			if (res['_id']) {
				this.gatewayService.gateway.next({ ...res })
				this.toastrService.success(`Gateway added successfully`, `Success`);
				this.dialogRef.close();
			}
			this.isSubmitting = false;
		},
			error => {
				this.toastrService.error(`${error?.error?.message}`, `Error`)
				this.isSubmitting = false;
				this.dialogRef.close();

			})
	}

	public get serialNo() {
		return this.gatewayForm.get('serialNo');
	}

	public get name() {
		return this.gatewayForm.get('name');
	}

	public get ipv4() {
		return this.gatewayForm.get('ipv4');
	}

}
