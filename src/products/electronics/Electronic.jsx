import {lapi,speaker,watch,pend} from "../../assets";


const  Electronic = [

  
  {
    id: "601",
    name: "Macbook pro",
    price: 999.99,
    description: "Worlds ist fastest and lightweighyt lapi",
    images: [lapi,speaker,watch,pend],
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
  },
  {
    id: "602",
    name: "Speaker",
    price: 49.99,
    description: "Enjoy your sound moment",
    images: [speaker,watch,pend,lapi],
    colors: ["red", "green"],
    size: ["S", "M", "L", "XL"],
  },
   {
    id: "603",
    name: "Wrist Watch",
    price: 55.99,
    description: "Expensive watch ever",
    images: [watch,pend,lapi,speaker],
    colors: ["black", "green"],
    size: ["S", "M", "L", "XL"],
  },
   {
    id: "604",
    name: "Pendrive-4.0a",
    price: 32.99,
    description: "Fast and quick transfer data",
    images: [pend,lapi,speaker,watch],
    colors: ["black","blue", "green"],
    size: ["S", "M", "L", "XL"],
  },
];
export {Electronic};