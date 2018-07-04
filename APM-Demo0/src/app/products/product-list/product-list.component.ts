import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../product';
import { select, Store } from '@ngrx/store';
import { getCurrentProduct, getError, getProducts, getShowProductCode, State } from '../state/product.reducer';
import * as productActions from '../state/product.actions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';

  products$: Observable<Product[]>;
  errorMessage$: Observable<string>;
  displayCode$: Observable<boolean>;
  selectedProductId$: Observable<number | null>;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(new productActions.Load());

    this.products$ = this.store.pipe(select(getProducts));
    this.errorMessage$ = this.store.pipe(select(getError));
    this.displayCode$ = this.store.pipe(select(getShowProductCode));
    this.selectedProductId$ = this.store.pipe(
      select(getCurrentProduct),
      map(product => product != null ? product.id : null)
    );
  }

  ngOnDestroy(): void {
  }

  checkChanged(value: boolean): void {
    this.store.dispatch(new productActions.ToggleProductCode(value));
  }

  newProduct(): void {
    this.store.dispatch(new productActions.InitializeCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(new productActions.SetCurrentProduct(product));
  }

}
