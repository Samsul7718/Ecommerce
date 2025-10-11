// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const SearchResults = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [searchResults, setSearchResults] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   // Extract query from URL
//   const queryParams = new URLSearchParams(location.search);
//   const query = queryParams.get("query")?.trim().toLowerCase() || "";

//   // Example category list
//   const categories = [
//     "All",
//     "Electronics",
//     "Fashion",
//     "Beauty",
//     "Books & More",
//     "Grocery",
//     "Home & Furniture",
//     "Kids Toy",
//   ];

//   useEffect(() => {
//     if (!query) {
//       setSearchResults([]);
//       setLoading(false);
//       return;
//     }

//     const fetchResults = async () => {
//       setLoading(true);
//       try {
//         // 🔧 Adjust backend endpoint to your setup
//         let url = `https://your-backend-url.com/api/products?search=${query}`;
//         if (selectedCategory !== "All") {
//           url += `&category=${encodeURIComponent(selectedCategory)}`;
//         }

//         const res = await fetch(url);
//         const data = await res.json();

//         setSearchResults(data);
//       } catch (error) {
//         console.error("Error fetching search results:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchResults();
//   }, [query, selectedCategory]);

//   const handleCategoryChange = (e) => {
//     setSelectedCategory(e.target.value);
//   };

//   const handleProductClick = (id) => {
//     navigate(`/item/${id}`);
//   };

//   // 🌀 Loading State
//   if (loading) return <p className="text-center mt-10 text-gray-600">Loading results...</p>;

//   // ❌ No Results
//   if (!searchResults.length)
//     return (
//       <div className="text-center mt-20 text-gray-600">
//         <h2 className="text-2xl font-semibold mb-2">No results found</h2>
//         <p>Try a different keyword or category.</p>
//       </div>
//     );

//   // ✅ Display Results
//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
//         <h2 className="text-2xl font-bold mb-3 sm:mb-0">
//           Search results for: <span className="text-blue-600">{query}</span>
//         </h2>

//         {/* Category Filter Dropdown */}
//         <select
//           value={selectedCategory}
//           onChange={handleCategoryChange}
//           className="border border-gray-300 rounded-lg px-3 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
//         >
//           {categories.map((cat, index) => (
//             <option key={index} value={cat}>
//               {cat}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//         {searchResults.map((product) => (
//           <div
//             key={product._id}
//             onClick={() => handleProductClick(product._id)}
//             className="border rounded-xl shadow-sm hover:shadow-md transition p-3 bg-white cursor-pointer"
//           >
//             <img
//               src={product.imageUrl}
//               alt={product.name}
//               className="w-full h-40 object-cover rounded-md mb-3"
//             />
//             <h3 className="text-sm font-semibold truncate">{product.name}</h3>
//             <p className="text-gray-700 font-medium mt-1">${product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchResults;
