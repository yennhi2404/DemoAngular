import {Component} from '@angular/core';

@Component({
    templateUrl: './word.component.html',
    selector: 'app-word',
    styleUrls: ['./word.component.css']
})

export class WordComponent{
    en = 'Hello';
    vn = 'Xin chao';
    imageUrl = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
    forgot = false;

    toggleForgot(){
        this.forgot = !this.forgot;
    }
}