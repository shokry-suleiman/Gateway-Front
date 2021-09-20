import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-gateway-item',
	templateUrl: './gateway-item.component.html',
	styleUrls: ['./gateway-item.component.scss']
})
export class GatewayItemComponent implements OnInit {

	@Input() name: any;
	@Input() ipv4: any;
	@Input() serialNo: any;
	@Input() id: any;
	constructor() { }

	ngOnInit(): void {
	}

}
