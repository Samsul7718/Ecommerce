import { long,kurti ,saree,burkha} from "../../assets";


const GirlProducts = [
  
  {
    id: "101",
    name: "Long dress",
    price: 79.99,
    description: "These long dress specially designed for function and style...",
    images: [long,kurti,saree,burkha],
    colors: ["black","red", "blue"],
    size: ["S", "M", "L", "XL"],
  },
  {
    id: "102",
    name: "Kurti",
    price: 49.99,
    description: "Soft cotton kurti for daily wear...",
    images: [kurti,saree,burkha,long],
    colors: ["red", "green"],
    size: ["S", "M", "L", "XL"],
  },
   {
    id: "103",
    name: "South Saree",
    price: 45.99,
    description: "Long traditional saree for daily wear...",
    images: [saree,burkha,long,kurti],
    colors: ["black", "green"],
    size: ["S", "M", "L", "XL"],
  },
   {
    id: "104",
    name: "Burkha",
    price: 88.99,
    description: "Elegant burkha for special occasions...",
    images: [burkha,long,kurti,saree],
    colors: ["black","blue", "green"],
    size: ["S", "M", "L", "XL"],
  },
];
export {GirlProducts};