import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";




@Directive({
    selector: '[apphover]'
})
export class AppHoverDirective {

    constructor(private element: ElementRef, renderer: Renderer2) { }

    @HostBinding('style.backgroundColor') backgroundColor: String = '#28282B';
    @HostBinding('style.backgroundColor') textColor: String = 'white';
    @HostBinding('style.backgroundColor') border: string = 'none';


    @HostListener('mouseenter') OnMouseEnter() {

        this.backgroundColor = 'white';
        this.textColor = '#28282B';
        this.border = '1px solid  #28282B'  
    }


    @HostListener('mouseout') OnMouseOut() {

        this.backgroundColor = '#28282B';
        this.textColor = 'white';
        this.border = 'none'


    }






}