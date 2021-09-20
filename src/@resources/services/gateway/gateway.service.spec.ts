import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BaseHttpService } from '../base-http/base-http.service';

import { GatewayService } from './gateway.service';

describe('GatewayService', () => {
	let service: GatewayService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [GatewayService]
		});
		service = TestBed.inject(GatewayService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
