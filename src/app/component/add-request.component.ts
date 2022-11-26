import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { AppService } from "../service/app.service";

@Component({
    selector: 'add-request',
    templateUrl: './add-reqeust.component.html',
    styleUrls: ['./add-request.component.scss']
})
export class AddRequestComponent implements OnInit{
    requestForm !: FormGroup;
    get isValid() { return this.requestForm.valid; }

    constructor(private fb: FormBuilder, private service: AppService, public dialogRef: MatDialogRef<AddRequestComponent>) {

    }
    ngOnInit(): void {
        this.requestForm = this.fb.group({
            name: [null, [Validators.required]],
            link: [null, [Validators.required]]
        });
    }
    addRequest() {
        const request = {
            ...this.requestForm.value,
            status: 'requested',
            date: new Date(),
            comment: ''
        }
        this.service.addRequest(request).subscribe({
            next: data => {
                console.log('hi');
                this.dialogRef.close();
            }
        });
    }
}