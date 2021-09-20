import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BaseHttpService } from '../base-http/base-http.service';

import { DeviceService } from './device.service';

describe('DeviceService', () => {
	let service: DeviceService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [DeviceService]
		});
		service = TestBed.inject(DeviceService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
