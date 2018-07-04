import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductService } from '../product.service';
import { LoadFailure, LoadSuccess, ProductActionTypes } from './product.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ProductEffects {

  constructor(private actions$: Actions, private productService: ProductService) { }

  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(ProductActionTypes.Load),
    mergeMap(action => this.productService.getProducts().pipe(
      map(products => new LoadSuccess(products)),
      catchError(err => of(new LoadFailure(err)))
    ))
  );
}
