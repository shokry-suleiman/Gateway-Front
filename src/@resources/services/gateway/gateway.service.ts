import { BaseHttpService } from './../base-http/base-http.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Gateway } from 'src/@resources/models/gateway';

@Injectable({
	providedIn: 'root'
})
export class GatewayService extends BaseHttpService {

	gateway: Subject<Gateway> = new Subject();
	
	listGateways() {
		return this.get(`gateways`);
	}

	listGateway(gatewayId: string) {
		return this.get(`gateways/${gatewayId}`);
	}

	createGateway(data: any) {
		return this.post(`gateways`, { ...data });
	}

	deleteGateway(gatewayId: string) {
		return this.delete(`gateways/${gatewayId}`);
	}
}
