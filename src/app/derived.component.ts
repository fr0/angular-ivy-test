import {Component, Directive, Input} from '@angular/core';

@Directive()
export class BaseComponent<T> {
  @Input() value: T;
}

@Component({
  selector: 'app-derived',
  template: `
    {{value}}
  `
})
export class DerivedComponent extends BaseComponent<string> {

}
