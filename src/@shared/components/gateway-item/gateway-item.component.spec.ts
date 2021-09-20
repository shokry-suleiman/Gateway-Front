import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayItemComponent } from './gateway-item.component';

describe('GatewayItemComponent', () => {
	let component: GatewayItemComponent;
	let fixture: ComponentFixture<GatewayItemComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [GatewayItemComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(GatewayItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
