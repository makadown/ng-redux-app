import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app-state';
import { reset } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {
  contador$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.contador$ = store.pipe(select('contador'));
  }
  ngOnInit() {}

  reset() {
    this.store.dispatch(reset());
  }
}
