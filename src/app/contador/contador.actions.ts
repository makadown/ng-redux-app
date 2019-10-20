import { createAction, props } from '@ngrx/store';

export const incrementar = createAction('[Contador Component] Incrementar');
export const decrementar = createAction('[Contador Component] Decrementar');
export const multiplicar = createAction('[Contador Component] Multiplicar', props<{payload: number}>());
export const dividir = createAction('[Contador Component] Dividir', props<{payload: number}>());
export const reset = createAction('[Contador Component] Reset');