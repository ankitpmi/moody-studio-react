import { Category } from "../services";

export interface CartDataType {
  id: number,
  pId: number,
  qty: number
}

export interface CartProductTypr {
  id: number;
  pId: number;
  name: string;
  category: Category;
  price: number;
  qty: number;
  img: string;
}