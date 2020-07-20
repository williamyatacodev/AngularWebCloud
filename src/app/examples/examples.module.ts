import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import { AboutComponent } from './about/about.component'; 

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        MatCardModule,
        MatSelectModule,
        BrowserAnimationsModule,
        NgxPaginationModule
    ],
    declarations: [
        LandingComponent,
        AboutComponent
    ]
})
export class ExamplesModule { }
