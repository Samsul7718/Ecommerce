import {facepwd,day_creme,lipstick,facewash} from "../../assets";


const  Beauty = [

  
  {
    id: "701",
    name: "Face Powder",
    price: 12.99,
    description: "Best looking buauty product...",
    images: [facepwd,day_creme,lipstick,facewash],
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
  },
  {
    id: "702",
    name: "Day-Creame",
    price: 15.99,
    description: "Perfect gradient day creame for unisex",
    images: [day_creme,lipstick,facewash,facepwd],
    colors: ["red", "green"],
    size: ["S", "M", "L", "XL"],
  },
   {
    id: "703",
    name: "LipStick",
    price: 10.99,
    description: "Varient color colorful lipstick",
    images: [lipstick,facewash,facepwd,day_creme],
    colors: ["black", "green"],
    size: ["S", "M", "L", "XL"],
  },
   {
    id: "704",
    name: "Face Wash",
    price: 13.99,
    description: "Getting dust free bright looking",
    images: [facewash,facepwd,day_creme,lipstick],
    colors: ["black","blue", "green"],
    size: ["S", "M", "L", "XL"],
  },
];
export {Beauty};