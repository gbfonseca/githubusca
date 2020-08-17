import { RouterModule } from '@angular/router';
import { HeaderComponent } from './template/header/header.component';
import { NgModule } from '@angular/core';
import { UserIconComponent } from './shared/user-icon/usericon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LocationIconComponent } from './shared/location-icon/location-icon.component';

@NgModule({
    declarations: [
        HeaderComponent,
        UserIconComponent,
        LocationIconComponent
    ],
    imports: [
        FontAwesomeModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        UserIconComponent,
        LocationIconComponent
    ]
})
export class CoreModule {

}