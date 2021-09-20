import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DeviceService } from './../../../@resources/services/device/device.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceAddDialogComponent } from './device-add-dialog.component';
import { IndividualConfig, ToastrService } from 'ngx-toastr';

describe('DeviceAddDialogComponent', () => {
	let component: DeviceAddDialogComponent;
	let fixture: ComponentFixture<DeviceAddDialogComponent>;

	const fakeDialogRefData = {
		width: '',
		data: {}
	}

	const fakeDialogData = {
		data: {}
	};

	const toastrService = {
		success: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { },
		error: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { }
	};

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [DeviceAddDialogComponent],
			imports: [HttpClientTestingModule, MatDialogModule],
			providers: [FormBuilder, DeviceService,
				{ provide: MatDialogRef, useValue: fakeDialogRefData },
				{ provide: MAT_DIALOG_DATA, useValue: fakeDialogData },
				{ provide: ToastrService, useValue: toastrService }
			]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(DeviceAddDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
