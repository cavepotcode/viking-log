import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { ForgotPasswordComponent } from './components/user/forgot-password/forgot-password.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ResetPasswordComponent } from './components/user/reset-password/reset-password.component';
import { UsersComponent } from './components/users/users.component';
import { BlockUIModule } from 'ng-block-ui';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';

import { SharedModule } from './shared/shared.module';
import { PrivateSectionModule } from './modules/private-section/private-section.module';
import { StateService } from './shared/services/state/state.service';
import { environment } from 'src/environments/environment';

const config: SocketIoConfig = { url: `${environment.socket}`, options: {} };

@NgModule({
    declarations: [
        AppComponent,
        ForgotPasswordComponent,
        LoginComponent,
        RegisterComponent,
        ResetPasswordComponent,
        UsersComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        BlockUIModule.forRoot({
            delayStart: 500,
        }
        ),
        ToastrModule.forRoot(
            {
                closeButton: true,
                positionClass: 'toast-bottom-full-width'
            }
        ),
        SharedModule,
        FormsModule,
        SocketIoModule.forRoot(config)
    ],
    providers: [StateService, Location, { provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap: [AppComponent]
})
export class AppModule { }
