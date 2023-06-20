import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { DetailsComponent } from './components/details/details.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommentsModule } from '../comments/comments.module';
import { RatingComponent } from './components/rating/rating.component';
import { NgbModule, NgbRating } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AllProductsComponent,
    DetailsComponent,
    ProductComponent,
    RatingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule,
    CommentsModule,ReactiveFormsModule, NgbModule
  ],
  exports:[RatingComponent]
})
export class ProductsModule { }
