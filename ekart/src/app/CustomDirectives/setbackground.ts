//Custom Attribute Directive
import { Directive, ElementRef,OnInit, Renderer2 } from "@angular/core"


@Directive({
    selector:'[setbackground]'
})
export class setbackground implements OnInit{

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
    
    this.renderer.setStyle(this.element.nativeElement ,'backgroundColor','green');
    this.renderer.setStyle(this.element.nativeElement ,'Color','black');
    this.renderer.setAttribute(this.element.nativeElement ,'title','Latest Brands');

}




}