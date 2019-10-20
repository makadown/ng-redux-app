import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app-state';
import { dividir, multiplicar, reset } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {
  contador$: Observable<number>;
  
  constructor(private store: Store<AppState>) {
    this.contador$ = store.pipe(select('contador'));
  }

  ngOnInit() {
  }

  mutiplicar() {
    this.store.dispatch(multiplicar({payload:5}));
  }

  dividir() {
    this.store.dispatch(dividir({payload:5}));
  }
}
