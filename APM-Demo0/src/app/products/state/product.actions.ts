import { Action } from '@ngrx/store';
import { Product } from '../product';

export enum ProductActionTypes {
  ToggleProductCode = 'products$/Toggle Product Code',
  SetCurrentProduct = 'products$/Set Current Product',
  ClearCurrentProduct = 'products$/Clear Current Product',
  InitializeCurrentProduct = 'products$/Initialize Current Product',
  Load = 'products$/Load',
  LoadSuccess = 'products$/Load Success',
  LoadFailure = 'products$/Load Failure',
}

export class ToggleProductCode implements Action {
  readonly type = ProductActionTypes.ToggleProductCode;
  constructor(public payload: boolean) {}
}
export class SetCurrentProduct implements Action {
  readonly type = ProductActionTypes.SetCurrentProduct;
  constructor(public payload: Product) {}
}
export class ClearCurrentProduct implements Action {
  readonly type = ProductActionTypes.ClearCurrentProduct;
}
export class InitializeCurrentProduct implements Action {
  readonly type = ProductActionTypes.InitializeCurrentProduct;
}
export class Load implements Action {
  readonly type = ProductActionTypes.Load;
}
export class LoadSuccess implements Action {
  readonly type = ProductActionTypes.LoadSuccess;
  constructor(public payload: Product[]) {}
}
export class LoadFailure implements Action {
  readonly type = ProductActionTypes.LoadFailure;
  constructor(public payload: string) {}
}

export type ProductActions = ToggleProductCode |
                             SetCurrentProduct |
                             ClearCurrentProduct |
                             InitializeCurrentProduct |
                             Load |
                             LoadSuccess |
                             LoadFailure;
