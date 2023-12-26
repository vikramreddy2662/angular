//Custom Attribute Directive
import { Directive, ElementRef,Input,OnInit, Renderer2 } from "@angular/core"


@Directive({
    selector:'[setbackground]'
})
export class setbackground implements OnInit{

    // @Input('setbackground') backColor:string="green"

    // @Input() textColor:string="white";


  @Input('setbackground') changeColor:{backColor:string,textColor:string};



    // private element:ElementRef
   //private renderer:Renderer2

constructor( private element:ElementRef, private renderer:Renderer2){
//this.element=element;
this.renderer=renderer;
//this.element.nativeElement.style.backgroundColor="red";
//element.nativeElement.style.backgroundColor="yellow";


}
ngOnInit(){

    // this.element.nativeElement.style.backgroundColor="green";
    // this.element.nativeElement.style.textColor="black";
    
    //this.renderer.setStyle(this.element.nativeElement ,'backgroundColor',this.backColor);
    //this.renderer.setStyle(this.element.nativeElement ,'Color',this.textColor);
    //this.renderer.setAttribute(this.element.nativeElement ,'title','Latest Brands');

    this.renderer.setStyle(this.element.nativeElement ,'backgroundColor',this.changeColor.backColor);
    this.renderer.setStyle(this.element.nativeElement ,'Color',this.changeColor.textColor);
    this.renderer.setAttribute(this.element.nativeElement ,'title','Latest Brands');

}




}