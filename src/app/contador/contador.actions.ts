import { createAction } from '@ngrx/store';

export const incrementar = createAction('[Contador Component] Incrementar');
export const decrementar = createAction('[Contador Component] Decrementar');
export const multiplicar = createAction('[Contador Component] Multiplicar');
export const dividir = createAction('[Contador Component] Dividir');
export const reset = createAction('[Contador Component] Reset');