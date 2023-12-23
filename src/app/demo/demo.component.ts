
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
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy


        } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})

export class DemoComponent implements OnChanges, OnInit ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy
{
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
 =>it runs only once like ngonit and it runs after the ngDocheck
 =>it's called only after all the processes are finished and all the before methods are called*/

  }

  ngAfterContentChecked(){

    console.log('ngAfterContentChecked  life cycle hook is called');
    console.log(this.paraEl.nativeElement);
  /*
  ngAfterContentChecked life cycle hook is called after the projected Content is created,intialized,updated.
  
  it's same as like as do check but this hook is called  after the projected content is intialized.

  it's called for every CDLC run. no matter whether the projected content is updated or not.

  the properties decorarted using content child and content children decoraters are also assigned to projected content 
  in ngAfterContentChecked method */

}
ngAfterViewInit(){

  console.log("ngAfterViewInit lifeCycle Hook is called");
  console.log(this.tempelement.nativeElement);


/*ngAfterViewInit method  is called only after the template of it's component and view templates of it's child class components are fully
intialized
=>view child and view children decorators are just intialized before this method.
=>just like ngInit and ngAfterInit. ngAfterViewInit hook method also get called only once after the first run of CDLC 
=>it's called after all the lifecycle hooks of it's child component is executed  */

}
ngAfterViewChecked(){

  console.log("ngAfterViewChecked hook is called");
  console.log(this.tempelement.nativeElement.textContent);


  /*ngAfterViewChecked is called after the ngAfterViewInit it runs at the very first when the component is created and after 
  for every CDLC run
  =>the properties updated using view child and view children decorator are rendered on the webpage as it runs for every CDLC RUN
  no  matter whether the change is detected by CDLC  ngAfterViewChecked is run for every CDLC run */

}

ngOnDestroy(){

console.log("ngOnDestroy Method lifecycle  hook is called");

}




}

