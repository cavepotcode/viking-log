import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateComponent } from './components/private/private.component';
import { PrivateRouting } from './private-section-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SharedModule } from '../../../../src/app/shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { RouterModule } from '@angular/router';
// import { MatPaginator } from '@angular/material/paginator';


@NgModule({
  declarations: [PrivateComponent, NavigationComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    PrivateRouting,
    LayoutModule,
    SharedModule
  ]
})
export class PrivateSectionModule { }
