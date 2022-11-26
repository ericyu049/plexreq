import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
    exports: [
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatPaginatorModule
    ]
})
export class MaterialModule { }