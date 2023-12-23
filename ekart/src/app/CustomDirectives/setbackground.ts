//Custom Attribute Directive
import { Directive, ElementRef,OnInit } from "@angular/core"


@Directive({
    selector:'[setbackground]'
})
export class setbackground implements OnInit{

   // private element:ElementRef

constructor( private element:ElementRef){
//this.element=element;
//this.element.nativeElement.style.backgroundColor="red";
//element.nativeElement.style.backgroundColor="yellow";


}
ngOnInit(){

    this.element.nativeElement.style.backgroundColor="green";
    this.element.nativeElement.style.textColor="black";

}

/*Custom Directive is a user defined directive 
Using this directive we can add user defined styles  to single dom element and multiple dom elements unlike a normal attribute directive 
where we can add only a style to single dom element
=>using slector of this component as an attribute in dom element 
=>this component class gets intialized and it's constructor gets called and after reference of that particular dom element is passed as an 
instance to the property element and using that property element we can add styling to dom element */


}