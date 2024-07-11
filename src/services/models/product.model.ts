export interface ProductsRes {
  id:       number;
  name:     string;
  category: Category;
  price:    number;
  color:    string[];
  img:      string
}

export enum Category {
  Appliances = "Appliances",
  Furniture = "Furniture",
}
