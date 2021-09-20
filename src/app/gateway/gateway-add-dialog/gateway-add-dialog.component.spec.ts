import { HttpClientModule } from '@angular/common/http';
import { GatewayService } from 'src/@resources/services/gateway/gateway.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayAddDialogComponent } from './gateway-add-dialog.component';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IndividualConfig, ToastrService } from 'ngx-toastr';

describe('GatewayAddDialogComponent', () => {
	let component: GatewayAddDialogComponent;
	let fixture: ComponentFixture<GatewayAddDialogComponent>;

	const dialogDataFake = {
		data: {}
	};

	const dialogRefFake = {
		width: '',
		data: {}
	}

	const toastrService = {
		success: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { },
		error: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { }
	};

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [GatewayAddDialogComponent],
			imports: [HttpClientModule],
			providers: [GatewayService, FormBuilder, MatDialogModule,
				{ provide: MAT_DIALOG_DATA, useValue: dialogDataFake },
				{ provide: MatDialogRef, useValue: dialogRefFake },
				{ provide: ToastrService, useValue: toastrService }]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(GatewayAddDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
