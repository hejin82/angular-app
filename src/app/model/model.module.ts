import { NgModule } from '@angular/core';
import { StaticDatasource } from './static.datasource';
import { Model } from './repository.model';

@NgModule({
  providers: [Model, StaticDatasource]
})
export class ModelModule { }
