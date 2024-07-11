import { Category } from "../services"

export interface FilterMenuType {
  id: number
  label: string
  items?: FilterMenuType[],
  isSelected?: boolean
}

export const FilterMenuData: FilterMenuType[] = [
  {
    id: 1,
    items: [{ id: 11, label: "New arrivals" }],
    label: "New arrivals",
  },
  {
    id: 2,
    label: "Shop By Category",
    items: [
      {
        id: 21,
        label: "Jewellery",
        // items: [
        //   { id: 211, label: "duvet cover sets" },
        //   { id: 212, label: "sheets" },
        //   { id: 213, label: "bedspreads & blankets" },
        // ],
      },
      {
        id: 22,
        label: "Books",
       
      },
      {
        id: 23,
        label: "Fashion",
       
      },
      {
        id: 24,
        label: Category.Appliances,
       
      },
      {
        id: 25,
        label: Category.Furniture,
       
      },
    ],
  },
  {
    id: 3,
    label: "Color",
    items: [
      { id: 31, label: "yellow" },
      { id: 32, label: "orange" },
      { id: 33, label: "Blue" },
      { id: 34, label: "Gray" },
      { id: 35, label: "black" },
      { id: 36, label: "red" },
      { id: 37, label: "Brown" },
    ],
  },
]




