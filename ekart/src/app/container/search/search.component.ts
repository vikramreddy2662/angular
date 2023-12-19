import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
searchText:string="";

 //numbers:number[]=[12,33,54,67,89,75];
 
//items:string[]=["apple","banana","carrot","orange","kiwi"];

//types:string[]=["Color","Quality","Brand","price","size"];
@Output()
SearchTextEvent:EventEmitter<string> =new EventEmitter<string>();

onSearchTextEvent()
{
this.SearchTextEvent.emit(this.searchText);
}

updateSearchText(event : any){

this.searchText=event.target.value;

}




}



