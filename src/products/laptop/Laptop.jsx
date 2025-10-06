import { mac4,macpro,asus,lenovo} from "../../assets";

const Laptop = [
 
  {
    id: "01",
    name: "Macbook M4",
    price: 999.99,
    description: "macbook m4,16gb Ram,512gb ssd,Retina display,upto 18h battery backup",
    images: [mac4,macpro,asus,lenovo], 
    colors: ["black","red", "blue"],
    size: ["13-inch", "14-inch", "15-inch"],
    
  },
  {
    id: "02",
    name: "Macbook pro",
    price: 1199.99,
    description: "macbook pro,16gb Ram,Retina display, 1TB ssd,upto 18h battery backup",
    images: [macpro,asus,lenovo,mac4],
    colors: ["black","red", "blue"],
    size: ["13-inch", "14-inch", "15-inch"],
    
  },
   {
    id: "03",
    name: "Asus",
    price: 599.99,
    description: "New process with lpddr4 ram,Dragon display,upto 7 hours battery backup",
    images: [asus,lenovo,mac4,macpro,],
    colors: ["black","red", "blue"],
    size: ["13-inch", "14-inch", "15-inch"],
  
  },
   {
    id: "04",
    name: "Lenovo",
    price: 699.99,
    description: "New process with lpddr5 ram,Dragon display,upto 8 hours battery backup",
    images: [lenovo,mac4,macpro,asus],
    colors: ["black","red", "blue"],
    size: ["13-inch", "14-inch", "15-inch"],
  },
];
export {Laptop};