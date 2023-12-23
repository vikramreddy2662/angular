import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Lifecycle-Hook';
  inputVal:string='';
  todestroy:boolean=false;
 

  constructor(){
    console.log('App component constructor called');
   }


   onBtnClicked(inputEl:HTMLInputElement){
    this.inputVal=inputEl.value;
   }

   /*ngAfterViewInit(){

    console.log("ngAfterViewInit lifeCycle Hook is called");
   // console.log(this.tempelement.nativeElement);
  
   }

   ngAfterViewChecked(){
    console.log('ngAfetrVeiwChecked Hook is Called'); 
   }*/

   onDestroyBtn(){
  
    this.todestroy=!this.todestroy
    
 
   }
   
}
