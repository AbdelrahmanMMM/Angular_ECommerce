import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { HttpClientModule } from '@angular/common/http';
import { CommentsModule } from './comments/comments.module';
import { CommentComponent } from './comments/components/comment/comment.component';
import { CommentsComponent } from './comments/components/comments/comments.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { CommentFormComponent } from './comments/components/comment-form/comment-form.component';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    ProductsModule,
    CartModule,
    HttpClientModule,
    CommentsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
