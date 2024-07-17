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
      { id: 38, label: "#EB5757" },
      { id: 39, label: "green" },
      { id: 40, label: "purple" },
      { id: 41, label: "pink" },
      { id: 42, label: "#f2f2f2" },
      { id: 43, label: "lime" },
      { id: 44, label: "cyan" },
      { id: 45, label: "magenta" },
      { id: 46, label: "maroon" },
      { id: 47, label: "navy" },
      { id: 48, label: "olive" }
    ],
  },
  {
    id: 4,
    // items: [{ id: 11, label: "New arrivals" }],
    label: "Test-1",
  },
  {
    id: 5,
    // items: [{ id: 11, label: "New arrivals" }],
    label: "Test-2",
  },
]




