import { BaseHttpService } from './../base-http/base-http.service';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class DeviceService extends BaseHttpService {

	listDeviceByGatewayId(gatewayId: string) {
		return this.get(`devices/${gatewayId}/gateway`);
	}

	createDevice(data: any) {
		return this.post(`devices`, { ...data });
	}

	deleteDevice(deviceId: string) {
		return this.delete(`devices/${deviceId}`);
	}
}
