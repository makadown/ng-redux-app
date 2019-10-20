import { createReducer, on } from '@ngrx/store';
import { incrementar, decrementar, reset, multiplicar, dividir } from './contador.actions';
import { Action } from 'rxjs/internal/scheduler/Action';
 
export const initialState = 0;
 
const _contadorReducer = createReducer(initialState,
  on(incrementar, state => state + 1),
  on(decrementar, state => state - 1),
  on(multiplicar, (state, {payload}) => state * payload ),
  on(dividir, (state, {payload})  => state / payload),
  on(reset, state => 0),
);
 /**
  * Funcion para reducer. Siguiendo instrucciones de 
  * https://ngrx.io/guide/store
  * @param state 
  * @param action 
  */
export function contadorReducer(state, action) {
  return _contadorReducer(state, action);
}