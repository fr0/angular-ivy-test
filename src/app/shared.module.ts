import {NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BaseComponent, DerivedComponent} from './derived.component';

export const SHARED_COMPONENTS: Type<any>[] = [
  BaseComponent,
  DerivedComponent
];

@NgModule({
  declarations: [SHARED_COMPONENTS],
  exports: [SHARED_COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: []
})
export class SharedModule {
  constructor() { }
}
