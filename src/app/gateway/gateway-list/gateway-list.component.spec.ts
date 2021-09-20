import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GatewayService } from 'src/@resources/services/gateway/gateway.service';

import { GatewayListComponent } from './gateway-list.component';

describe('GatewayListComponent', () => {
	let component: GatewayListComponent;
	let fixture: ComponentFixture<GatewayListComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [GatewayListComponent],
			imports: [HttpClientTestingModule],
			providers: [GatewayService]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(GatewayListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
