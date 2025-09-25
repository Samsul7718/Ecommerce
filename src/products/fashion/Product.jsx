import { formal, pant, shirt, T_shirt } from "../../assets";
const products = [
  {
    id: "1",
    name: "Formal Dress",
    price: 79.99,
    description: "These formals are designed for comfort and style...",
    images: [formal,pant], // multiple images per product
    colors: ["black", "blue"],
  },
  {
    id: "2",
    name: "Casual Shirt",
    price: 49.99,
    description: "Soft cotton casual shirt for daily wear...",
    images: [shirt,pant],
    colors: ["red", "green"],
  },
   {
    id: "3",
    name: "Casual Office Wear",
    price: 39.99,
    description: "Soft cotton casual shirt for office wear...",
    images: [T_shirt,pant],
    colors: ["black", "green"],
  },
   {
    id: "4",
    name: "Casual Shirt",
    price: 36.99,
    description: "Soft cotton casual T_shirt for daily wear...",
    images: [ pant,shirt],
    colors: ["blue", "green"],
  },
];
export {products};