import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numberObsSubscription : Subscription;
  customeObsSubscription : Subscription;
  constructor() { }

  ngOnInit() {
    const myNumber = Observable.interval(1000)
    .map(
      (data:number)=>{
        return data * 2;
      }
    );
    this.numberObsSubscription = myNumber.subscribe(
      (number:number) =>{
        console.log(number);
      }
    );

    const myObservable = Observable.create((observer: Observer<string>)=> {
      setTimeout(()=>{
        observer.next('my first data package');
      },2000);
      setTimeout(()=>{
        observer.next('second first data package');
      },4000);
      setTimeout(()=>{
        observer.error('this does not work');
      },5000);
       setTimeout(()=>{
        observer.next('second first data package');
      },6000);
    });
    this.customeObsSubscription = myObservable.subscribe(
      (data: string)=>{ console.log(data);},
      (error: string)=>{ console.log(error);},
      (completed: string)=>{ console.log('Complemented!!');}
    );
  }

  ngOnDestroy(){
    this.customeObsSubscription.unsubscribe();
    this.numberObsSubscription.unsubscribe();
  }
}
