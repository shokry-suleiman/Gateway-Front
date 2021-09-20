import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { GatewayAddDialogComponent } from 'src/app/gateway/gateway-add-dialog/gateway-add-dialog.component';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	constructor(private dialog: MatDialog) { }

	ngOnInit(): void {
	}

	addGateway() {
		const dialogRef = this.dialog.open(GatewayAddDialogComponent, {
			width: '500px'
		});
	}
}
