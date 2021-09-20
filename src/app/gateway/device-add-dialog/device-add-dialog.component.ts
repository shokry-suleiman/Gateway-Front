import { DeviceService } from './../../../@resources/services/device/device.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-device-add-dialog',
	templateUrl: './device-add-dialog.component.html',
	styleUrls: ['./device-add-dialog.component.scss']
})
export class DeviceAddDialogComponent implements OnInit {

	deviceForm: FormGroup = this.fb.group({
		vendor: ['', [Validators.required]],
		status: ['', [Validators.required]]
	})
	isSubmitting: boolean = false;
	constructor(private fb: FormBuilder, private deviceSevice: DeviceService,
		@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<DeviceAddDialogComponent>,
		private toastrService: ToastrService) { }

	ngOnInit(): void {

	}

	createDevice() {
		this.isSubmitting = true;
		this.deviceSevice.createDevice({ ...this.deviceForm.value, 'gatewayId': this.data.gatewayId }).subscribe((res: any) => {
			this.isSubmitting = false;
			if (res['_id']) {
				this.dialogRef.close({ ...res })
				this.toastrService.success(`Device added successfully`, `Success`)
			}
		},
			error => {
				this.toastrService.error(`${error?.error?.message}`, `Error`)
				this.isSubmitting = false;
				this.dialogRef.close(null);
			})
	}

	public get vendor() {
		return this.deviceForm.get('vendor');
	}

	public get status() {
		return this.deviceForm.get('status');
	}

}
