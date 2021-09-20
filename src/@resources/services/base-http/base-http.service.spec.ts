import { TestBed } from '@angular/core/testing';

import { BaseHttpService } from './base-http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('BaseHttpService', () => {
	let service: BaseHttpService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [HttpClient]
		});
		service = TestBed.inject(BaseHttpService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
