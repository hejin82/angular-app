import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ModelModule } from './model/model.module';
import { CoreModule } from './core/core.module';
import { TableComponent } from './core/table/table.component';
import { FormComponent } from './core/form/form.component';
import { MessageModule } from './messages/message.module';
import { MessageComponent } from './messages/message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppDashboradComponent } from './app-dashborad/app-dashborad.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AppDashboradComponent,
    // TableComponent,
    // FormComponent,
    // MessageComponent
  ],
  imports: [
    BrowserModule,
    ModelModule,
    CoreModule,
    MessageModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    TableComponent,
    FormComponent,
    MessageComponent
  ]
})
export class AppModule { }
