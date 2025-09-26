import {coffiee,juicer,toaster,rice} from "../../assets";


const KitchProducts = [

  {
    id: "301",
    name: "Coffiee Maker",
    price: 25.99,
    description: "Remove your stress with coffiee...",
    images: [coffiee,juicer,toaster,rice],
    colors: ["black","red", "blue"],
    // size: ["S", "M", "L", "XL"],
  },
  {
    id: "302",
    name: "Juicer",
    price: 10.99,
    description: "Making juice with juicer...",
    images: [juicer,toaster,rice,coffiee],
    colors: ["red","black", "green"],
    // size: ["S", "M", "L", "XL"],
  },
   {
    id: "303",
    name: "Toaster",
    price: 45.99,
    description: "Toaster for making bread...",
    images: [toaster,rice,coffiee,juicer],
    colors: ["black", "green"],
    // size: ["S", "M", "L", "XL"],
  },
   {
    id: "304",
    name: "Rice Maker_45",
    price: 65.99,
    description: "Rice maker for making rice...",
    images: [rice,coffiee,juicer,toaster],
    colors: ["black","blue", "red"],
    // size: ["S", "M", "L", "XL"],
  },
];
export {KitchProducts};