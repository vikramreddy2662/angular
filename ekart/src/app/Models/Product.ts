export class Product{
    

        id: number ;
        name:String ;
        description:String; 
        brand: String;
        gender:String ;
        category:String;
        size: number[];
        color: String[];
        price:number;
        discountPrice?:number;
        is_in_inventory:boolean;
        items_left: number;
        imageURL: String;
        slug: String;
    
      
}
