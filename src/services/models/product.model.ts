export interface ProductsRes {
  id:       string;
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
