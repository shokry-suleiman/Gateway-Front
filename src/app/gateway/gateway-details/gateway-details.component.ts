import { DeviceService } from './../../../@resources/services/device/device.service';
import { Device } from './../../../@resources/models/device';
import { GatewayService } from './../../../@resources/services/gateway/gateway.service';
import { Component, OnInit } from '@angular/core';
import { Gateway } from 'src/@resources/models/gateway';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeviceAddDialogComponent } from '../device-add-dialog/device-add-dialog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-gateway-details',
	templateUrl: './gateway-details.component.html',
	styleUrls: ['./gateway-details.component.scss']
})
export class GatewayDetailsComponent implements OnInit {

	gateway: Gateway = {
		serialNo: '',
		name: '',
		ipv4: '',
		_id: ''
	}
	devices: Device[] = [];
	constructor(private gatewayService: GatewayService, private route: ActivatedRoute,
		private deviceService: DeviceService, private dialog: MatDialog,
		private toastrService: ToastrService, private router: Router) { }

	ngOnInit(): void {
		this.gateway['_id'] = (this.route.snapshot.paramMap?.get('gatewayId')) as string;
		if (this.gateway._id || this.gateway._id != '')
			this.getGateway()
	}

	getGateway() {
		this.gatewayService.listGateway(this.gateway._id).subscribe((res: any) => {
			this.gateway = res;
			this.getGatewayDevices();
		})
	}

	getGatewayDevices() {
		this.deviceService.listDeviceByGatewayId(this.gateway['_id']).subscribe((res: any) => {
			this.devices = [...res];
		})
	}

	addDevice() {
		const dialogRef = this.dialog.open(DeviceAddDialogComponent, {
			width: '500px',
			data: {
				gatewayId: this.gateway['_id']
			},
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (result)
				this.devices.push(result);
		});
	}

	deleteDevice(index: number) {
		this.deviceService.deleteDevice(this.devices[index]['_id']).subscribe((res: any) => {
			this.devices.splice(index, 1);
			this.toastrService.success(`Deleted Successfully`, 'Success');
		})
	}

	deleteGateway() {
		this.gatewayService.deleteGateway(this.gateway['_id']).subscribe((res: any) => {
			this.router.navigate(['./'])
			this.toastrService.success(`Deleted Successfully`, 'Success');
		})
	}
}
