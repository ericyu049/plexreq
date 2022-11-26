import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, map, Observable, switchMap, tap } from 'rxjs';
import { AddRequestComponent } from './component/add-request.component';
import { AppService } from './service/app.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
	requests$ !: Observable<any>;
	displayedColumns: string[] = ['name', 'link', 'date', 'status'];
	subject = new BehaviorSubject(0);
	dataSource: any;

	@ViewChild(MatPaginator) paginator!: MatPaginator;

	constructor(private dialog: MatDialog, private service: AppService) {

	}
	ngOnInit(): void {
	}
	ngAfterViewInit() {
		this.requests$ = this.subject.asObservable().pipe(
			switchMap(() => this.service.getRequest({}).pipe(
				map((response: any) => {
					const dataSource = new MatTableDataSource(response.data);
					dataSource.paginator = this.paginator;
					return dataSource;
				})
			))			
		);
	}
	newReqeust() {
		const ref = this.dialog.open(AddRequestComponent, {
			height: '400px',
			width: '400px'
		});
		ref.afterClosed().subscribe({
			next: (data) => this.subject.next(0)
		})
	}
}
