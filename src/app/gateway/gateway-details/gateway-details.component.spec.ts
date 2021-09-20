import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { DeviceService } from 'src/@resources/services/device/device.service';
import { GatewayService } from 'src/@resources/services/gateway/gateway.service';

import { GatewayDetailsComponent } from './gateway-details.component';

describe('GatewayDetailsComponent', () => {
	let component: GatewayDetailsComponent;
	let fixture: ComponentFixture<GatewayDetailsComponent>;

	const fakeActivatedRoute = {
		snapshot: { data: {} }
	} as ActivatedRoute;

	const toastrService = {
		success: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { },
		error: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { }
	};

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [GatewayDetailsComponent],
			imports: [HttpClientTestingModule, MatDialogModule, RouterTestingModule],
			providers: [GatewayService, DeviceService,
				{ provide: ActivatedRoute, useValue: fakeActivatedRoute },
				MatDialog, ToastrService,
				{ provide: ToastrService, useValue: toastrService }]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(GatewayDetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
