import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
searchText='';

 //numbers:number[]=[12,33,54,67,89,75];
 
//items:string[]=["apple","banana","carrot","orange","kiwi"];

//types:string[]=["Color","Quality","Brand","price","size"];

updateSearchText(event : any){

this.searchText=event.target.value;

}




}



