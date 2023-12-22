
import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})

export class DemoComponent implements OnChanges, OnInit {
  title: string = 'Demo Component';
  //@Input() message: string[];
  @Input() message: string;
  @ViewChild('temp') tempelement: ElementRef;


  constructor() {
    console.log('Demo component constructor called');
    console.log(this.title);
    console.log(this.message);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(' ng onchanges hook called ');
    console.log(changes);
    // console.log(this.message)
  }

  ngOnInit() {

    console.log(' ng onInit hook  is called ');
    /*console.log(this.tempelement.nativeElement.innerHTML);=>ngOnInit is called before  view child ,view children,projection content 
    child content children decorators are rendered or created so we cannot use any property decorated with view child decorator*/

  }


}

