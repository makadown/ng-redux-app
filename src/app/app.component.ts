import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { incrementar, decrementar, reset } from './contador/contador.actions';
import { AppState } from './app-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador$: Observable<number>;
  constructor(private store: Store<AppState>) {
    this.contador$ = store.pipe(select('contador'));
  }

  incrementar() {
    this.store.dispatch(incrementar());
  }

  decrementar() {
    this.store.dispatch(decrementar());
  }
}
