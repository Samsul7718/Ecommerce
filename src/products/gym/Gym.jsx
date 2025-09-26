import {cheast,dumble,starx,trademill} from "../../assets";


const GymProducts = [

  {
    id: "201",
    name: "Cheast",
    price: 79.99,
    description: "These product build your body and chest...",
    images: [cheast,dumble,starx,trademill],
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
  },
  {
    id: "202",
    name: "Dumble",
    price: 49.99,
    description: "Very effective for body building...",
    images: [dumble,starx,trademill,cheast],
    colors: ["red","black", "green"],
    size: ["S", "M", "L", "XL"],
  },
   {
    id: "203",
    name: "Starx",
    price: 45.99,
    description: "Perfect for your daily exercise...",
    images: [starx,trademill,cheast,dumble],
    colors: ["black", "green"],
    size: ["S", "M", "L", "XL"],
  },
   {
    id: "204",
    name: "Trademill",
    price: 88.99,
    description: "Best running machine for your daily exercise...",
    images: [trademill,cheast,dumble,starx],
    colors: ["black","blue", "red"],
    size: ["S", "M", "L", "XL"],
  },
];
export {GymProducts};