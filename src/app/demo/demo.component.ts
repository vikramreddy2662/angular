
import { Component, 
   Input, 
   OnChanges,
   OnInit, 
   SimpleChanges, 
   ViewChild, 
   ElementRef, 
   DoCheck ,
   AfterContentInit,
  ContentChild,
  AfterContentChecked


        } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})

export class DemoComponent implements OnChanges, OnInit ,DoCheck,AfterContentInit,AfterContentChecked{
  title: string = 'Demo Component';
  //@Input() message: string[];
  @Input() message: string;
  @ViewChild('temp') tempelement: ElementRef;
  @ContentChild('para') paraEl:ElementRef;


  constructor() {
   // console.log('Demo component constructor called');
    //console.log(this.title);
    //console.log(this.message);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(' ng onchanges hook called ');
    //console.log(changes);
    // console.log(this.message)
  }

  ngOnInit() {

    console.log(' ng onInit hook  is called ');
    /*console.log(this.tempelement.nativeElement.innerHTML);=>ngOnInit is called before  view child ,view children,projection content 
    child content children decorators are rendered or created so we cannot use any property decorated with view child decorator*/

  }
  ngDoCheck() {
    console.log("ng doCheck life cycle is called");
   // console.log(this.paraEl);//here the value is undefined 
  }
  //ng Docheck is called everytime when the CDLC runs
  //no matter whether the changes are detected or not by CDLC it runs for every click.

  ngAfterContentInit(){

    console.log('ng AfterContentInit life Cycle Hook is Called');
    console.log(this.paraEl.nativeElement);

/*ngAfterContentInit life cycle method gets called when projected content is fully injected in between selectors Elements of a 
 child component class  is fully intialized
 =>properties decorated with contentChild contentChildren are called just before ngcontentAfterInit method is called
 do they are undefined before ngaftercontentinit 
 =>it runs only once like ngonit and it runs after the ngDocheck*/

  }

  ngAfterContentChecked(){

    console.log('ngAfterContentChecked  life cycle hook is called');
    console.log(this.paraEl.nativeElement);

  }

}

