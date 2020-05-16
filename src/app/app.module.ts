import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { RedditComponent } from './reddit/reddit.component';
import { RedditArticleComponent } from './reddit-article/reddit-article.component';
import { ProductComponent } from './product/product/product.component';
import { AppProductComponent } from './product/app-product/app-product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCounterComponent } from './product/product-counter/product-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent,
    RedditComponent,
    RedditArticleComponent,
    ProductComponent,
    AppProductComponent,
    ProductListComponent,
    ProductCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
