export interface FilterMenuType {
  id: number
  label: string
  items?: FilterMenuType[],
  isSelected?: boolean
}

export const FilterMenuData: FilterMenuType[] = [
  {
    id: 1,
    items: [{ id: 11, label: "New arrivals", isSelected: false }],
    label: "New arrivals",
  },
  {
    id: 2,
    label: "Shop By Rooms",
    items: [
      {
        id: 21,
        label: "bedroom",
        items: [
          { id: 211, label: "duvet cover sets" },
          { id: 212, label: "sheets" },
          { id: 213, label: "bedspreads & blankets" },
        ],
      },
      {
        id: 22,
        label: "living room",
       
      },
      {
        id: 23,
        label: "child room",
       
      },
    ],
  },
  {
    id: 3,
    label: "Color",
    items: [
      { id: 31, label: "#F2C94C" },
      { id: 32, label: "#EB5757" },
      { id: 33, label: "Blue" },
      { id: 34, label: "Gray" },
      { id: 35, label: "black" },
      { id: 36, label: "red" },
      { id: 37, label: "Brown" },
    ],
  },
]




