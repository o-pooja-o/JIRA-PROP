import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [BreadCrumbComponent],
    exports: [BreadCrumbComponent],
})
export class SharedModule { }
