import {car,bike,jcb,train} from "../../assets";


const  Shoes = [

  
  {
    id: "501",
    name: "Car Toy",
    price: 13.99,
    description: "These car toy specially designed for kids...",
    images: [car,bike,jcb,train],
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
  },
  {
    id: "502",
    name: "Bike Toy",
    price: 29.99,
    description: "Amazing bike toy for kids...",
    images: [bike,jcb,train,car],
    colors: ["red", "green"],
    size: ["S", "M", "L", "XL"],
  },
   {
    id: "503",
    name: "JCB Toy",
    price: 15.99,
    description: "Original looking JCB toy for kids...",
    images: [jcb,train,car,bike],
    colors: ["black", "green"],
    size: ["S", "M", "L", "XL"],
  },
   {
    id: "504",
    name: "Train Toy",
    price: 12.99,
    description: "Amazing train toy for kids...",
    images: [train,car,bike,jcb],
    colors: ["black","blue", "green"],
    size: ["S", "M", "L", "XL"],
  },
];
export {Shoes};