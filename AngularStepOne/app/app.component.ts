import {Component,ViewEncapsulation} from '@angular/core';

@Component({
    selector:'my-app',
    template:'<h2>Hello World!</h2>',
    styles:['h2 {color:red}'],
    encapsulation:ViewEncapsulation.Emulated
})
export class AppComponent{

}