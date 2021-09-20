import { GatewayService } from './../../../@resources/services/gateway/gateway.service';
import { Component, OnInit } from '@angular/core';
import { Gateway } from 'src/@resources/models/gateway';

@Component({
	selector: 'app-gateway-list',
	templateUrl: './gateway-list.component.html',
	styleUrls: ['./gateway-list.component.scss']
})
export class GatewayListComponent implements OnInit {

	gateways!: Gateway[];
	constructor(private gatewayService: GatewayService) { }

	ngOnInit(): void {
		this.getAllGateways();
		this.gatewayService.gateway.subscribe((res) => {
			this.gateways.push(res);
		})
	}

	getAllGateways() {
		this.gatewayService.listGateways().subscribe((res: any) => {
			this.gateways = [...res];
		})
	}

}
