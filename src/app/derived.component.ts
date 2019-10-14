import {Component, Directive, Input} from '@angular/core';

@Directive()
export class BaseComponent<T> {
  @Input() value: T;
}

@Component({
  selector: 'adt-derived',
  template: `
    {{value}}
  `
})
export class DerivedComponent extends BaseComponent<string> {

}
