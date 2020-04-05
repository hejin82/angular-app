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

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    // TableComponent,
    // FormComponent,
    // MessageComponent
  ],
  imports: [
    BrowserModule,
    ModelModule,
    CoreModule,
    MessageModule
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
