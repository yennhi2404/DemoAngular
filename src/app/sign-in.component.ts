import { Component } from '@angular/core';
//import { Http, Headers } from '@angular/core';

@Component({
    selector: 'app-sign-in',
    template: `
        <form (ngSubmit)="onSubmit(formSignIn);" #formSignIn="ngForm">
            <input placeholder="Email" ngModel #txtEmail="ngModel" name="email" required email>
            <!-- <p *ngIf = "formSignIn.controls.email?.errors?.required"> -->
            <p *ngIf="txtEmail.touched && txtEmail.errors?.required">
                Email is required
            </p>
            <p *ngIf="txtEmail.touched && txtEmail.errors?.email">
                Email is not valid
            </p>
            <br><br>
            <input type="password" placeholder="Password" ngModel #txtPassword="ngModel" name="password" minlength="6" pattern="[a-z]*">
            <br><br>
            <div ngModelGroup="subjects">
                <label><input type="checkbox" [ngModel]="false" name="NodeJS">NodeJS</label>
                <label><input type="checkbox" [ngModel]="false" name="Angular">Angular</label>
                <label><input type="checkbox" [ngModel]="false" name="ReactJS">ReactJS</label>
            </div>
            <br><br>
            <button [disabled]="formSignIn.invalid">Submit</button>
        </form>
        <button>POST</button>
        <p>{{ txtEmail.errors | json }}</p>
        <p>{{ txtPassword.errors | json }}</p>
        <p>{{ formSignIn.value | json }}</p>
    `
})
export class SignInComponent{
    onSubmit(formSignIn){
        console.log(formSignIn); 
        throw new Error('Form is invalid');  
    }
}