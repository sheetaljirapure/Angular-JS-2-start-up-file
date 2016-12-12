import {Component} from 'angular2/core';

@Component({
    selector: 'main-app',

    template:`<h1>{{title}}</h1>
    <h4>{{msg}}</h4>
    <button (click)="clickMe()">Click me</button>
    <ul >
        <li *ngFor = "#f of courseArray">{{f}}</li>
       
    </ul>
    `

})

export class mainComponent{

    title: string;
    msg:string;
       courseArray =['Angular1','javascript','jquery','TypeScript','Node','java'];
    clickMe = function(){
        alert("Hello Angular 2");
 
    };

    constructor(){
        this.title ="welcome to my first app ";
     
        this.msg="this is second titile in the app";
    };
}